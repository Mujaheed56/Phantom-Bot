<p align="center">
  <img src="https://img.shields.io/badge/⚡_PHANTOM_BOT-v3.5.0-blueviolet?style=for-the-badge&labelColor=0d1117" alt="Phantom Bot"/>
</p>

<p align="center">
  <b>A powerful WhatsApp bot with 334+ commands</b><br/>
  <i>AI • Football • Games • Economy • Islamic • Downloads • Converter Suite • Group Management</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Commands-334+-blue?style=flat-square" alt="Commands"/>
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Baileys-7.0.0--rc13-orange?style=flat-square" alt="Baileys"/>
  <img src="https://img.shields.io/badge/License-No_Selling-red?style=flat-square" alt="License"/>
</p>

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure
#    - Get SESSION_ID from the pairing portal
#    - Copy .env.example to .env and add your API keys (see table below)

# 3. Start
npm start
```

> **Pairing Portal:** [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com)

---

## ⚙️ Configuration

Edit `.env` (or `config.js`) to customize your bot:

### 🔑 Session & Core

| Setting | Description | Required |
|---|---|---|
| `SESSION_ID` | Session token from pairing portal | ✅ |
| `OWNER_NUMBER` | Override bot owner phone number | ❌ |
| `PREFIX` | Command prefix (default: `!`) | ❌ |
| `AUTO_READ` | Auto-read incoming messages | ❌ |
| `AUTO_TYPING` | Show typing indicator | ❌ |
| `TIMEZONE` | Timezone for prayer & reminders (default: `Africa/Lagos`) | ❌ |

### 🤖 AI API Keys

| Setting | Get Your Key | Required | Default Model |
|---|---|---|---|
| `GEMINI_API_KEY` | [🔗 Google AI Studio](https://aistudio.google.com/app/apikey) | ✅ | `gemini-3.6-flash` |
| `GROK_API_KEY` | [🔗 xAI Console](https://console.x.ai/) | ❌ | `grok-4.6` |
| `OPENAI_API_KEY` | [🔗 OpenAI Platform](https://platform.openai.com/api-keys) | ❌ | `gpt-5.6-sol` |
| `CLAUDE_API_KEY` | [🔗 Anthropic Console](https://console.anthropic.com/settings/keys) | ❌ | `claude-opus-5` |
| `PERPLEXITY_API_KEY` | [🔗 Perplexity API](https://www.perplexity.ai/settings/api) | ❌ | `sonar-reasoning` |
| `DEEPSEEK_API_KEY` | [🔗 DeepSeek Platform](https://platform.deepseek.com/api_keys) | ❌ | `deepseek-v4-pro` |
| `OPENROUTER_API_KEY` | [🔗 OpenRouter](https://openrouter.ai/keys) | ❌ | `meta-llama/llama-3.3-70b-instruct:free` |
| `TOGETHER_API_KEY` | [🔗 Together AI](https://api.together.xyz/settings/api-keys) | ❌ | `meta-llama/Llama-3.3-70B-Instruct-Turbo` |
| `MISTRAL_API_KEY` | [🔗 Mistral Console](https://console.mistral.ai/api-keys/) | ❌ | `mistral-large-latest` |

### 🎙️ Voice & Feature API Keys

| Setting | Get Your Key | Required | Powers |
|---|---|---|---|
| `FISH_AUDIO_API_KEY` | [🔗 Fish Audio](https://fish.audio/) | ❌ | Ultra-realistic AI voice synthesis (`s2.1-pro-free`) |
| `ELEVENLABS_API_KEY` | [🔗 ElevenLabs](https://elevenlabs.io/app/settings/api-keys) | ❌ | Premium AI text-to-speech human voices |
| `REMOVEBG_API_KEY` | [🔗 Remove.bg](https://www.remove.bg/dashboard#api-key) | ❌ | High-Definition Background removal |
| `FOOTBALL_API_KEY` | [🔗 API-Football](https://www.api-football.com/) | ❌ | Live scores, standings, player stats |

> 💡 **Tip:** Only `SESSION_ID` and `GEMINI_API_KEY` are required. All other keys are optional — features that need them will show a friendly message if the key is missing.

---

## 📋 Features — 334 Commands

### 🤖 Ai `18 commands`
`ai` · `chatgpt` · `claude` · `dalle` · `deepseek` · `editimg` · `gemini` · `gpt` · `grok` · `imagine` · `llama` · `mixtral` · `openrouter` · `perplexity` · `removebg` · `solve` · `translate` · `vision`

### 📦 Converter `3 commands`
`tomp3` · `toptt` · `tovideo`

### 📥 Download `16 commands`
`apk` · `facebook` · `img` · `instagram` · `lyrics` · `mediafire` · `mediainfo` · `pinterest` · `play` · `song` · `spotify` · `tiktok` · `twitter` · `wallpaper` · `yt` · `ytsearch`

### 💰 Economy `31 commands`
`Fruit` · `Phantom Corp` · `auction` · `balance` · `bet` · `bounty` · `crime` · `daily` · `deposit` · `duel` · `gamble` · `gift` · `heist` · `inventory` · `loan` · `lottery` · `payback` · `register` · `richest` · `rob` · `sell` · `slots` · `trade` · `transfer` · `weekly` · `withdraw` · `work` · `🎣 Fishing Rod` · `🎣 Fishing Rod` · `🐟 Small Fish` · `🪨 Stone`

### 📦 Football `1 command`
`Premier League`

### 🎮 Fun `40 commands`
`8ball` · `advice` · `aesthetic` · `ask` · `birthday` · `choose` · `compatibility` · `compliment` · `confess` · `couple` · `dare` · `emojimix` · `fact` · `fakeinfo` · `flip` · `fortune` · `gaytest` · `hack` · `horoscope` · `joke` · `meme` · `mock` · `pickup` · `quote` · `quotepic` · `rate` · `react` · `reverse` · `roast` · `roll` · `rps` · `say` · `ship` · `simp` · `trivia` · `truth` · `ttt` · `typewriter` · `wasted` · `wordchain`

### 🕹️ Games `24 commands`
`2048` · `Cat` · `Dog` · `Rabbit` · `Slash` · `Slime` · `blackjack` · `charades` · `connect4` · `dungeon` · `emojiguess` · `flagquiz` · `guess` · `hangman` · `mathquiz` · `minesweeper` · `quiz` · `riddle` · `scramble` · `snake` · `tictactoe` · `typingrace` · `wordle` · `wouldyourather`

### 📌 General `12 commands`
`alive` · `help` · `info` · `menu` · `owner` · `ping` · `repo` · `report` · `stats` · `store` · `support` · `uptime`

### 👥 Group `67 commands`
`activity` · `add` · `admins` · `analytics` · `announce` · `anonymous` · `antibadword` · `antibot` · `antidelete` · `antiflood` · `antiforeign` · `antilink` · `antispam` · `antistatus` · `ar` · `autoreact` · `autoreply` · `ban` · `bizhours` · `chatfilter` · `chatrank` · `del` · `demote` · `disallow` · `gbackup` · `goodbye` · `groupinfo` · `grouplog` · `groupreset` · `grouptransfer` · `hidetag` · `kick` · `kickall` · `leaderboard` · `link` · `list` · `mediaonly` · `members` · `modstats` · `mute` · `muteall` · `notes` · `pin` · `poll` · `promote` · `purge` · `recap` · `resetwarn` · `revoke` · `rules` · `setdesc` · `setgoodbye` · `setgrouppp` · `seticon` · `setname` · `setwelcome` · `sgroupadd` · `slowmode` · `tag` · `tagall` · `tempban` · `unmute` · `votekick` · `warn` · `welcome` · `whitelist` · `🆕 Newbie`

### 🕌 Islamic `27 commands`
`Adam` · `Mishary Rashid Alafasy` · `Sahih al-Bukhari` · `asmaul` · `dhikr` · `dua` · `duas99` · `fasting` · `fiqh` · `hajj` · `hijri` · `iftar` · `islamicdate` · `islamichistory` · `islamicname` · `islamicquiz` · `juz` · `prayer` · `quran` · `ramadan` · `sadaqah` · `sahih` · `schedule` · `seerah` · `surah` · `tafsir` · `zakat`

### 🎬 Media `10 commands`
`addtext` · `blur` · `circle` · `deepfry` · `enhance` · `gif` · `grayscale` · `invert` · `pixelate` · `triggered`

### 📦 Other `1 command`
`video-dl`

### 👑 Owner `27 commands`
`Google Gemini` · `addsudo` · `anticall` · `autoread` · `autostatusview` · `autotyping` · `block` · `broadcast` · `changelog` · `chatbot` · `eval` · `exec` · `feedback` · `fullbackup` · `globalban` · `logmessages` · `maintenance` · `premium` · `private` · `restart` · `restore` · `setprefix` · `shutdown` · `train` · `unblock` · `update` · `voicebot`

### 🔍 Search `11 commands`
`anime` · `animesearch` · `antonym` · `book` · `country` · `detectlang` · `imdb` · `manga` · `recipe` · `synonym` · `urban`

### 🔧 Utility `46 commands`
`addsticker` · `afk` · `afklist` · `avatar` · `base64` · `bmi` · `calc` · `carbon` · `color` · `count` · `crypto` · `currency` · `define` · `diary` · `encode` · `font` · `github` · `hexcolor` · `iplookup` · `mathsolve` · `news` · `ocr` · `password` · `pastebin` · `profile` · `qr` · `qrread` · `remind` · `save` · `schedule` · `shorten` · `speedtest` · `ss` · `sticker` · `timezone` · `todo` · `toimg` · `topdf` · `tp` · `tts` · `unitconvert` · `vcf` · `vv` · `weather` · `whois` · `wiki`

---

## 🚀 Deployment & Cloud Hosting

### ⚡ BotForge (Official Hosting — Highly Recommended) ⭐

Keep your bot online **24/7 with 99.9% uptime** in just 1-click on **[BotForge](https://www.usebotforge.app/)**!

[![Deploy on BotForge](https://img.shields.io/badge/Deploy%20on-BotForge-6366F1?style=for-the-badge&logo=rocket&logoColor=white)](https://www.usebotforge.app/)

* 🚀 **1-Click Instant Deployment** — Zero technical setup, hassle-free bot launch.
* ⚡ **99.9% Rock-Solid Uptime** — Auto-restart on crash, ultra-fast servers, 24/7 active runtime.
* 🛡️ **Session Persistence** — Never lose your WhatsApp authentication or database on redeploys.
* 📊 **Live Console & Log Monitoring** — Real-time performance metrics, CPU, and RAM tracking.
* 🌐 **Start Hosting Now:** [https://www.usebotforge.app/](https://www.usebotforge.app/)

---

### Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

1. Set service type to **Worker**
2. Add environment variables in dashboard
3. Deploy from GitHub

### Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

```bash
heroku create
git push heroku main
```

### Railway / VPS

```bash
git clone https://github.com/Mujaheed56/Phantom-Bot.git
cd Phantom-Bot
npm install
npm start
```

---

## 🔗 Links

| | |
|---|---|
| **Official Bot Hosting** | [usebotforge.app (99.9% Uptime)](https://www.usebotforge.app/) |
| **Repository** | [github.com/Mujaheed56/Phantom-Bot](https://github.com/Mujaheed56/Phantom-Bot) |
| **Pairing Portal** | [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com) |
| **WhatsApp Channel** | [Follow for updates](https://whatsapp.com/channel/0029Vb7luTs4NVirFizIEE2A) |

---

## 📜 License

This project is **free to use, modify, and distribute** under the following conditions:

- ❌ **No Selling** — You may NOT sell this bot or any modified version of it
- ❌ **No Paid Access** — You may NOT charge others to use this bot
- ✅ **Free Use** — You may use, modify, and share it freely
- ✅ **Attribution** — Keep the original credits and links intact

See [LICENSE](LICENSE) for full details.

---

<p align="center">
  <b>⚡ PHANTOM BOT v3.5.0</b><br/>
  <i>334 commands · 15 categories · Powered by Phantom</i>
</p>
