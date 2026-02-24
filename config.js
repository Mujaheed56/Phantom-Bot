const identity = require("./lib/identity");

module.exports = {
  
  BOT_NAME: identity.BOT_NAME,
  BOT_VERSION: identity.BOT_VERSION,
  OWNER_NUMBER: identity.OWNER_NUMBER,
  CHANNEL_LINK: identity.CHANNEL_LINK,
  MENU_IMAGE_URL: identity.MENU_IMAGE_URL,

  
  PREFIX: process.env.PREFIX || "!",

  //paste your session id here if not the bot wont work
  SESSION_ID: process.env.SESSION_ID || "",

  // paste your api keys here for the ai to work
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  GEMINI_MODEL: process.env.GEMINI_MODEL || "gemini-3-flash-preview",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  REMOVEBG_API_KEY: process.env.REMOVEBG_API_KEY || "",

 
  AUTO_READ: process.env.AUTO_READ === "true" || false,
  AUTO_TYPING: process.env.AUTO_TYPING === "true" || false,
  AUTO_RECONNECT: process.env.AUTO_RECONNECT !== "false", // true by default

 
  SESSION_DIR: "./sessions",
};
