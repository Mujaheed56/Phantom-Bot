require("dotenv").config();
const identity = require("./lib/identity");

// Sanitize env variables (strip non-printable/non-ASCII characters)
const cleanEnv = (key) => (process.env[key] || "").replace(/[^\x20-\x7E]/g, "").trim();

const config = {
  BOT_NAME: identity.BOT_NAME,
  BOT_VERSION: identity.BOT_VERSION,
  OWNER_NUMBER: cleanEnv("OWNER_NUMBER") || identity.OWNER_NUMBER,
  CHANNEL_LINK: identity.CHANNEL_LINK,
  MENU_IMAGE_URL: identity.MENU_IMAGE_URL,

  PREFIX: process.env.PREFIX || "!",
  SESSION_ID: cleanEnv("SESSION_ID"),

  GEMINI_API_KEY: cleanEnv("GEMINI_API_KEY"),
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-1.5-flash",
  GROK_API_KEY: cleanEnv("GROK_API_KEY"),
  GROK_MODEL: process.env.GROK_MODEL || "openai/gpt-oss-20b",
  OPENAI_API_KEY: cleanEnv("OPENAI_API_KEY"),
  OPENAI_MODEL: process.env.OPENAI_MODEL || "gpt-5.6-sol",
  CLAUDE_API_KEY: cleanEnv("CLAUDE_API_KEY"),
  CLAUDE_MODEL: process.env.CLAUDE_MODEL || "claude-opus-5",
  PERPLEXITY_API_KEY: cleanEnv("PERPLEXITY_API_KEY"),
  PERPLEXITY_MODEL: process.env.PERPLEXITY_MODEL || "sonar-reasoning",
  DEEPSEEK_API_KEY: cleanEnv("DEEPSEEK_API_KEY"),
  DEEPSEEK_MODEL: process.env.DEEPSEEK_MODEL || "deepseek-v4-pro",
  OPENROUTER_API_KEY: cleanEnv("OPENROUTER_API_KEY"),
  OPENROUTER_MODEL: process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct:free",
  TOGETHER_API_KEY: cleanEnv("TOGETHER_API_KEY"),
  LLAMA_MODEL: process.env.LLAMA_MODEL || "meta-llama/Llama-3.3-70B-Instruct-Turbo",
  MISTRAL_API_KEY: cleanEnv("MISTRAL_API_KEY"),
  MIXTRAL_MODEL: process.env.MIXTRAL_MODEL || "mistral-large-latest",

  REMOVEBG_API_KEY: cleanEnv("REMOVEBG_API_KEY"),
  FOOTBALL_API_KEY: cleanEnv("FOOTBALL_API_KEY"),
  ELEVENLABS_API_KEY: cleanEnv("ELEVENLABS_API_KEY"),
  FISH_AUDIO_API_KEY: cleanEnv("FISH_AUDIO_API_KEY") || cleanEnv("FISH_API_KEY"),

  TIMEZONE: process.env.TIMEZONE || "Africa/Lagos",
  AUTO_READ: process.env.AUTO_READ === "true" || false,
  AUTO_TYPING: process.env.AUTO_TYPING === "true" || false,
  AUTO_RECONNECT: process.env.AUTO_RECONNECT !== "false",

  SESSION_DIR: "./sessions",
};

// Startup config validation
function validateConfig() {
  const warnings = [];
  const errors = [];

  if (!config.SESSION_ID) {
    errors.push("SESSION_ID is missing in .env — bot cannot authenticate without it");
  }

  if (!config.GEMINI_API_KEY && !config.GROK_API_KEY && !config.DEEPSEEK_API_KEY) {
    warnings.push("No AI API keys set in .env — AI features (autoreply, !ai, !grok, etc.) will be disabled");
  }
  if (!config.GEMINI_API_KEY) {
    warnings.push("GEMINI_API_KEY not set in .env — primary AI model unavailable");
  }
  if (!config.FOOTBALL_API_KEY) {
    warnings.push("FOOTBALL_API_KEY not set in .env — football commands will be limited");
  }
  if (!config.ELEVENLABS_API_KEY) {
    warnings.push("ELEVENLABS_API_KEY not set in .env — premium TTS unavailable");
  }
  if (!config.REMOVEBG_API_KEY) {
    warnings.push("REMOVEBG_API_KEY not set in .env — background removal unavailable");
  }

  if (errors.length > 0 || warnings.length > 0) {
    console.log("[Config] Status:");
    for (const err of errors) console.log(`  ❌ ${err}`);
    for (const warn of warnings) console.log(`  ⚠️  ${warn}`);
    console.log("");
  }

  const aiKeys = ["GEMINI_API_KEY", "GROK_API_KEY", "OPENAI_API_KEY", "CLAUDE_API_KEY", "DEEPSEEK_API_KEY", "PERPLEXITY_API_KEY", "TOGETHER_API_KEY", "MISTRAL_API_KEY"];
  const activeAI = aiKeys.filter(k => config[k]).length;
  console.log(`  🤖 AI models configured: ${activeAI}/${aiKeys.length}`);
  console.log(`  📌 Prefix: "${config.PREFIX}" | Timezone: ${config.TIMEZONE}`);
  console.log(`  📖 Auto-read: ${config.AUTO_READ} | Auto-typing: ${config.AUTO_TYPING}\n`);
}

validateConfig();

module.exports = config;