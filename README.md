<p align="center">
  <img src="https://img.shields.io/badge/⚡_PHANTOM_BOT-v1.2.0-blueviolet?style=for-the-badge&labelColor=0d1117" alt="Phantom Bot"/>
</p>

<p align="center">
  <b>A powerful WhatsApp bot with 201+ commands</b><br/>
  <i>AI • Games • Economy • Islamic • Downloads • Group Management</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Commands-201+-blue?style=flat-square" alt="Commands"/>
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
#    - Set GEMINI_API_KEY for AI features
#    - Edit config.js with your values

# 3. Start
npm start
```

> **Pairing Portal:** [phantom-session-web.onrender.com](https://phantom-session-web.onrender.com)

---

## ⚙️ Configuration

Edit `config.js` to customize your bot:

| Setting | Description | Required |
|---------|-------------|----------|
| `SESSION_ID` | Session token from pairing portal | ✅ |
| `GEMINI_API_KEY` | Google Gemini API key for AI features | ✅ |
| `PREFIX` | Command prefix (default: `!`) | ❌ |
| `REMOVEBG_API_KEY` | Remove.bg API key | ❌ |
| `AUTO_READ` | Auto-read incoming messages | ❌ |
| `AUTO_TYPING` | Show typing indicator | ❌ |

---

## 📋 Features — 201 Commands

### 🛡️ Admin `13 commands`
`admins` · `antibadword` · `antiflood` · `ban` · `kickall` · `lockgroup` · `members` · `purge` · `setdesc` · `setgrouppp` · `setname` · `unlockgroup` · `whitelist`

### 🤖 Ai `5 commands`
`ai` · `gpt` · `imagine` · `removebg` · `translate`

### 📥 Download `16 commands`
`apk` · `facebook` · `img` · `instagram` · `lyrics` · `mediafire` · `mediainfo` · `pinterest` · `play` · `song` · `spotify` · `tiktok` · `twitter` · `video` · `wallpaper` · `ytsearch`

### 💰 Economy `22 commands`
`Fruit` · `balance` · `crime` · `daily` · `deposit` · `gamble` · `gift` · `inventory` · `levelup` · `register` · `richest` · `rob` · `sell` · `slots` · `transfer` · `weekly` · `withdraw` · `work` · `🎣 Fishing Rod` · `🎣 Fishing Rod` · `🐟 Small Fish` · `🪨 Stone`

### 🎮 Fun `31 commands`
`8ball` · `aesthetic` · `ask` · `birthday` · `choose` · `compliment` · `confess` · `couple` · `dare` · `emojimix` · `fact` · `flip` · `horoscope` · `joke` · `meme` · `mock` · `quote` · `quotepic` · `rank` · `react` · `reverse` · `roast` · `roll` · `rps` · `say` · `ship` · `trivia` · `truth` · `ttt` · `wasted` · `wordchain`

### 🕹️ Games `14 commands`
`Dog` · `blackjack` · `charades` · `connect4` · `emojiguess` · `guess` · `hangman` · `mathquiz` · `quiz` · `riddle` · `scramble` · `tictactoe` · `typingrace` · `wouldyourather`

### 📌 General `10 commands`
`alive` · `help` · `info` · `menu` · `owner` · `ping` · `repo` · `report` · `stats` · `uptime`

### 👥 Group `32 commands`
`activity` · `add` · `antidelete` · `antilink` · `antispam` · `antistatus` · `ar` · `autoreact` · `autoreply` · `bizhours` · `del` · `demote` · `gbackup` · `goodbye` · `groupinfo` · `hidetag` · `kick` · `link` · `list` · `mute` · `notes` · `poll` · `promote` · `resetwarn` · `revoke` · `setgoodbye` · `setwelcome` · `tag` · `tagall` · `unmute` · `warn` · `welcome`

### 🕌 Islamic `17 commands`
`Adam` · `Mishary Rashid Alafasy` · `Sahih al-Bukhari` · `asmaul` · `dhikr` · `dua` · `hijri` · `iftar` · `islamicquiz` · `prayer` · `quran` · `ramadan` · `sadaqah` · `schedule` · `surah` · `tafsir` · `zakat`

### 👑 Owner `9 commands`
`autoread` · `autostatusview` · `autotyping` · `block` · `broadcast` · `chatbot` · `setprefix` · `shutdown` · `unblock`

### 🔍 Search `1 command`
`anime`

### 🔧 Utility `31 commands`
`afk` · `afklist` · `avatar` · `base64` · `bmi` · `calc` · `carbon` · `color` · `count` · `crypto` · `currency` · `define` · `encode` · `font` · `github` · `news` · `password` · `profile` · `qr` · `reminder` · `shorten` · `ss` · `sticker` · `timezone` · `todo` · `toimg` · `tp` · `tts` · `vv` · `weather` · `wiki`


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
  <b>⚡ PHANTOM BOT v1.2.0</b><br/>
  <i>201 commands · 12 categories · Powered by Baileys & Gemini AI</i>
</p>