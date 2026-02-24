const config = require("./config");
const { startBot } = require("./lib/connect");
const { decodeSession } = require("./lib/sessionExport");
const fs = require("fs");
const path = require("path");


console.log(`
 ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗████████╗ ██████╗ ███╗   ███╗
 ██╔══██╗██║  ██║██╔══██╗████╗  ██║╚══██╔══╝██╔═══██╗████╗ ████║
 ██████╔╝███████║███████║██╔██╗ ██║   ██║   ██║   ██║██╔████╔██║
 ██╔═══╝ ██╔══██║██╔══██║██║╚██╗██║   ██║   ██║   ██║██║╚██╔╝██║
 ██║     ██║  ██║██║  ██║██║ ╚████║   ██║   ╚██████╔╝██║ ╚═╝ ██║
 ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝
                    B O T   v1.0.0
`);

async function main() {
  try {
    console.log(`[Main] Starting ${config.BOT_NAME}...`);

    const credsPath = path.resolve(config.SESSION_DIR, "creds.json");

    
    if (fs.existsSync(credsPath)) {
      console.log("[Main] Existing session found in sessions/. Using it.");
      console.log("[Main] (Skipping SESSION_ID decode to preserve updated creds)");
    } else if (config.SESSION_ID) {
      
      console.log("[Main] No session folder found. Decoding SESSION_ID...");
      const decoded = decodeSession(config.SESSION_ID);
      if (decoded) {
        console.log("[Main] Session restored from SESSION_ID.");
      } else {
        console.warn("[Main] Failed to decode SESSION_ID.");
      }
    } else {
      console.log("[Main] No session and no SESSION_ID.");
      console.log("[Main] Use the web pairing portal to get a SESSION_ID.");
      console.log("[Main] Then paste it into config.js and restart.");
      return;
    }

   
    if (fs.existsSync(credsPath)) {
      console.log("[Main] Credentials found. Connecting bot...");
      await startBot();
    } else {
      console.log("[Main] No credentials found after decode. Check SESSION_ID.");
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
