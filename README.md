<p align="center">
  <img src="https://img.shields.io/badge/⚡_PHANTOM_BOT-v2.2.0-blueviolet?style=for-the-badge&labelColor=0d1117" alt="Phantom Bot"/>
</p>

<p align="center">
  <b>A powerful WhatsApp bot with 320+ commands</b><br/>
  <i>AI • Football • Games • Economy • Islamic • Downloads • Group Management</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Commands-320+-blue?style=flat-square" alt="Commands"/>
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Baileys-6.7.16-orange?style=flat-square" alt="Baileys"/>
  <img src="https://img.shields.io/badge/License-No_Selling-red?style=flat-square" alt="License"/>
</p>

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Configure
#    - Get SESSION_ID from the pairing portal
#    - Add your API keys in config.js (see table below)

# 3. Start
npm start
```

> **Pairing Portal:** [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com)

---

## ⚙️ Configuration

Edit `config.js` to customize your bot:

### 🔑 Session & General

| Setting | Description | Required |
|---------|-------------|----------|
| `SESSION_ID` | Session token from pairing portal | ✅ |
| `PREFIX` | Command prefix (default: `!`) | ❌ |
| `AUTO_READ` | Auto-read incoming messages | ❌ |
| `AUTO_TYPING` | Show typing indicator | ❌ |

### 🤖 AI API Keys

| Setting | Get Your Key | Required |
|---------|-------------|----------|
| `GEMINI_API_KEY` | [🔗 Google AI Studio](https://aistudio.google.com/app/apikey) | ✅ |
| `OPENAI_API_KEY` | [🔗 OpenAI Platform](https://platform.openai.com/api-keys) | ❌ |
| `CLAUDE_API_KEY` | [🔗 Anthropic Console](https://console.anthropic.com/settings/keys) | ❌ |
| `GROK_API_KEY` | [🔗 xAI Console](https://console.x.ai/) | ❌ |
| `PERPLEXITY_API_KEY` | [🔗 Perplexity API](https://www.perplexity.ai/settings/api) | ❌ |
| `DEEPSEEK_API_KEY` | [🔗 DeepSeek Platform](https://platform.deepseek.com/api_keys) | ❌ |
| `TOGETHER_API_KEY` | [🔗 Together AI](https://api.together.xyz/settings/api-keys) | ❌ |
| `MISTRAL_API_KEY` | [🔗 Mistral Console](https://console.mistral.ai/api-keys/) | ❌ |

### 🔧 Feature API Keys

| Setting | Get Your Key | Required | Powers |
|---------|-------------|----------|--------|
| `ELEVENLABS_API_KEY` | [🔗 ElevenLabs](https://elevenlabs.io/app/settings/api-keys) | ❌ | Premium AI text-to-speech voices |
| `REMOVEBG_API_KEY` | [🔗 Remove.bg](https://www.remove.bg/dashboard#api-key) | ❌ | Background removal from images |
| `FOOTBALL_API_KEY` | [🔗 API-Football](https://www.api-football.com/) | ❌ | Live scores, standings, player stats |

### 🧠 AI Model Overrides (Optional)

| Setting | Default | Description |
|---------|---------|-------------|
| `GEMINI_MODEL` | `gemini-2.0-flash` | Google Gemini model |
| `OPENAI_MODEL` | `gpt-4o-mini` | OpenAI GPT model |
| `CLAUDE_MODEL` | `claude-sonnet-4-20250514` | Anthropic Claude model |
| `GROK_MODEL` | `grok-3-mini-fast` | xAI Grok model |
| `PERPLEXITY_MODEL` | `sonar` | Perplexity model |
| `DEEPSEEK_MODEL` | `deepseek-chat` | DeepSeek model |
| `LLAMA_MODEL` | `Llama-3.3-70B-Instruct-Turbo` | Llama via Together AI |
| `MIXTRAL_MODEL` | `mistral-large-latest` | Mistral/Mixtral model |

> 💡 **Tip:** Only `SESSION_ID` and `GEMINI_API_KEY` are required. All other keys are optional — features that need them will show a message if the key is missing.

---

## 📋 Features — 320 Commands

### 🤖 Ai `17 commands`
`ai` · `chatgpt` · `claude` · `codellama` · `dalle` · `deepseek` · `gemini` · `gpt` · `grok` · `imagine` · `llama` · `mixtral` · `perplexity` · `removebg` · `sora` · `translate` · `vision`

### 📥 Download `16 commands`
`apk` · `facebook` · `img` · `instagram` · `lyrics` · `mediafire` · `mediainfo` · `pinterest` · `play` · `song` · `spotify` · `tiktok` · `twitter` · `video` · `wallpaper` · `ytsearch`

### 💰 Economy `32 commands`
`Fruit` · `Phantom Corp` · `auction` · `balance` · `bet` · `bounty` · `crime` · `daily` · `deposit` · `duel` · `gamble` · `gift` · `heist` · `inventory` · `levelup` · `loan` · `lottery` · `payback` · `register` · `richest` · `rob` · `sell` · `slots` · `trade` · `transfer` · `weekly` · `withdraw` · `work` · `🎣 Fishing Rod` · `🎣 Fishing Rod` · `🐟 Small Fish` · `🪨 Stone`

### 📦 Football `1 command`
`Premier League`

### 🎮 Fun `41 commands`
`8ball` · `advice` · `aesthetic` · `ask` · `birthday` · `choose` · `compatibility` · `compliment` · `confess` · `couple` · `dare` · `emojimix` · `fact` · `fakeinfo` · `flip` · `fortune` · `gaytest` · `hack` · `horoscope` · `joke` · `meme` · `mock` · `pickup` · `quote` · `quotepic` · `rank` · `rate` · `react` · `reverse` · `roast` · `roll` · `rps` · `say` · `ship` · `simp` · `trivia` · `truth` · `ttt` · `typewriter` · `wasted` · `wordchain`

### 🕹️ Games `24 commands`
`2048` · `Cat` · `Dog` · `Rabbit` · `Slash` · `Slime` · `blackjack` · `charades` · `connect4` · `dungeon` · `emojiguess` · `flagquiz` · `guess` · `hangman` · `mathquiz` · `minesweeper` · `quiz` · `riddle` · `scramble` · `snake` · `tictactoe` · `typingrace` · `wordle` · `wouldyourather`

### 📌 General `11 commands`
`alive` · `help` · `info` · `menu` · `owner` · `ping` · `repo` · `report` · `stats` · `support` · `uptime`

### 👥 Group `64 commands`
`activity` · `add` · `admins` · `announce` · `anonymous` · `antibadword` · `antibot` · `antidelete` · `antiflood` · `antiforeign` · `antilink` · `antispam` · `antistatus` · `ar` · `autoreact` · `ban` · `bizhours` · `chatfilter` · `chatrank` · `del` · `demote` · `disallow` · `gbackup` · `goodbye` · `groupinfo` · `grouplog` · `groupreset` · `grouptransfer` · `hidetag` · `kick` · `kickall` · `leaderboard` · `link` · `list` · `mediaonly` · `members` · `mute` · `muteall` · `notes` · `pin` · `poll` · `promote` · `purge` · `resetwarn` · `revoke` · `rules` · `setdesc` · `setgoodbye` · `setgrouppp` · `seticon` · `setname` · `setwelcome` · `sgroupadd` · `slowmode` · `tag` · `tagall` · `tempban` · `unmute` · `votekick` · `warn` · `welcome` · `welcome2` · `whitelist` · `🆕 Newbie`

### 📦 Harm_category_harassment `1 command`
`autoreply`

### 🕌 Islamic `27 commands`
`Adam` · `Mishary Rashid Alafasy` · `Sahih al-Bukhari` · `asmaul` · `dhikr` · `dua` · `duas99` · `fasting` · `fiqh` · `hajj` · `hijri` · `iftar` · `islamicdate` · `islamichistory` · `islamicname` · `islamicquiz` · `juz` · `prayer` · `quran` · `ramadan` · `sadaqah` · `sahih` · `schedule` · `seerah` · `surah` · `tafsir` · `zakat`

### 🎬 Media `10 commands`
`addtext` · `blur` · `circle` · `deepfry` · `enhance` · `gif` · `grayscale` · `invert` · `pixelate` · `triggered`

### 👑 Owner `22 commands`
`addsudo` · `autoread` · `autostatusview` · `autotyping` · `block` · `broadcast` · `changelog` · `chatbot` · `eval` · `exec` · `feedback` · `fullbackup` · `globalban` · `maintenance` · `premium` · `private` · `restart` · `restore` · `setprefix` · `shutdown` · `unblock` · `update`

### 🔍 Search `11 commands`
`anime` · `animesearch` · `antonym` · `book` · `country` · `detectlang` · `imdb` · `manga` · `recipe` · `synonym` · `urban`

### 🔧 Utility `43 commands`
`afk` · `afklist` · `avatar` · `base64` · `bmi` · `calc` · `carbon` · `color` · `count` · `crypto` · `currency` · `define` · `diary` · `encode` · `font` · `github` · `hexcolor` · `iplookup` · `mathsolve` · `news` · `ocr` · `password` · `pastebin` · `profile` · `qr` · `qrread` · `reminder` · `shorten` · `speedtest` · `ss` · `sticker` · `timezone` · `todo` · `toimg` · `topdf` · `tp` · `tts` · `unitconvert` · `vcf` · `vv` · `weather` · `whois` · `wiki`

---

## 🚀 Deployment

### Render (Recommended)

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
  <b>⚡ PHANTOM BOT v2.2.0</b><br/>
  <i>320 commands · 14 categories · Powered by Phantom</i>
</p>
