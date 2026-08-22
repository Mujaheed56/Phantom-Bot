const config = require("./config");
const { startBot } = require("./lib/connect");
const { decodeSession } = require("./lib/sessionExport");
const fs = require("fs");
const path = require("path");
const http = require("http");

// Port binding for Web Services (Render, Railway, Koyeb, Heroku)
const PORT = process.env.PORT || process.env.SERVER_PORT;
if (PORT) {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "online", bot: config.BOT_NAME, version: config.BOT_VERSION }));
  });
  server.listen(PORT, () => {
    console.log(`[Web] Health check server listening on port ${PORT}`);
  });
}


console.log(`
 ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗████████╗ ██████╗ ███╗   ███╗
 ██╔══██╗██║  ██║██╔══██╗████╗  ██║╚══██╔══╝██╔═══██╗████╗ ████║
 ██████╔╝███████║███████║██╔██╗ ██║   ██║   ██║   ██║██╔████╔██║
 ██╔═══╝ ██╔══██║██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╔╝██║
 ██║     ██║  ██║██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚═╝ ██║
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝
                    B O T   v${config.BOT_VERSION}
`);

async function main() {
  try {
    console.log(`[Main] Starting ${config.BOT_NAME}...`);

    const credsPath = path.resolve(config.SESSION_DIR, "creds.json");
    const hashPath = path.resolve(config.SESSION_DIR, ".session_hash");

    // If SESSION_ID is set in config, check hash or decode
    if (config.SESSION_ID && config.SESSION_ID.trim().length > 0) {
      const crypto = require("crypto");
      const currentHash = crypto.createHash("sha256").update(config.SESSION_ID.trim()).digest("hex");
      let savedHash = "";
      try {
        if (fs.existsSync(hashPath)) {
          savedHash = fs.readFileSync(hashPath, "utf-8").trim();
        }
      } catch {}

      // If creds.json exists and SESSION_ID hash hasn't changed, preserve active credentials
      if (fs.existsSync(credsPath) && savedHash === currentHash) {
        console.log("[Main] Active session credentials detected and verified. Preserving session keys.");
      } else {
        console.log("[Main] New or updated SESSION_ID detected. Restoring clean session keys...");
        const decoded = decodeSession(config.SESSION_ID.trim(), true);
        if (decoded) {
          console.log("[Main] ✅ Session successfully initialized from SESSION_ID.");
        } else {
          console.warn("[Main] ⚠️ Could not decode SESSION_ID. Checking existing files...");
        }
      }
    } else if (fs.existsSync(credsPath)) {
      console.log("[Main] Found existing session files in sessions/ folder.");
    } else {
      console.log("[Main] ❌ No session found and no SESSION_ID provided in config / .env.");
      console.log("[Main] Please use the web pairing portal (phantom-session-web.onrender.com) to get a SESSION_ID.");
      console.log("[Main] Then paste it into your .env / config.js and restart.");
      return;
    }

    if (fs.existsSync(credsPath)) {
      console.log("[Main] Credentials ready. Connecting bot...");
      await startBot();
    } else {
      console.log("[Main] No valid credentials found. Check your SESSION_ID in config.js.");
    }
  } catch (err) {
    console.error("[Main] Fatal error:", err);
    process.exit(1);
  }
}


process.on("uncaughtException", (err) => {
  console.error("[Main] Uncaught Exception:", err.message);
});

process.on("unhandledRejection", (reason) => {
  console.error("[Main] Unhandled Rejection:", reason);
});


main();
