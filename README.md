<p align="center">
  <img src="https://img.shields.io/badge/⚡_PHANTOM_BOT-v1.2.0-blueviolet?style=for-the-badge&labelColor=0d1117" alt="Phantom Bot"/>
</p>

<p align="center">
  <b>A powerful WhatsApp bot with 300+ commands</b><br/>
  <i>AI • Games • Economy • Islamic • Downloads • Group Management</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Commands-300+-blue?style=flat-square" alt="Commands"/>
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

## 📋 Features — 300 Commands

### 🛡️ Admin `11 commands`
`admins` · `antibadword` · `antiflood` · `ban` · `kickall` · `members` · `purge` · `setdesc` · `setgrouppp` · `setname` · `whitelist`

### 🤖 Ai `5 commands`
`ai` · `gpt` · `imagine` · `removebg` · `translate`

### 📥 Download `16 commands`
`apk` · `facebook` · `img` · `instagram` · `lyrics` · `mediafire` · `mediainfo` · `pinterest` · `play` · `song` · `spotify` · `tiktok` · `twitter` · `video` · `wallpaper` · `ytsearch`

### 💰 Economy `32 commands`
`Fruit` · `Phantom Corp` · `auction` · `balance` · `bet` · `bounty` · `crime` · `daily` · `deposit` · `duel` · `gamble` · `gift` · `heist` · `inventory` · `levelup` · `loan` · `lottery` · `payback` · `register` · `richest` · `rob` · `sell` · `slots` · `trade` · `transfer` · `weekly` · `withdraw` · `work` · `🎣 Fishing Rod` · `🎣 Fishing Rod` · `🐟 Small Fish` · `🪨 Stone`

### 🎮 Fun `41 commands`
`8ball` · `advice` · `aesthetic` · `ask` · `birthday` · `choose` · `compatibility` · `compliment` · `confess` · `couple` · `dare` · `emojimix` · `fact` · `fakeinfo` · `flip` · `fortune` · `gaytest` · `hack` · `horoscope` · `joke` · `meme` · `mock` · `pickup` · `quote` · `quotepic` · `rank` · `rate` · `react` · `reverse` · `roast` · `roll` · `rps` · `say` · `ship` · `simp` · `trivia` · `truth` · `ttt` · `typewriter` · `wasted` · `wordchain`

### 🕹️ Games `24 commands`
`2048` · `Cat` · `Dog` · `Rabbit` · `Slash` · `Slime` · `blackjack` · `charades` · `connect4` · `dungeon` · `emojiguess` · `flagquiz` · `guess` · `hangman` · `mathquiz` · `minesweeper` · `quiz` · `riddle` · `scramble` · `snake` · `tictactoe` · `typingrace` · `wordle` · `wouldyourather`

### 📌 General `10 commands`
`alive` · `help` · `info` · `menu` · `owner` · `ping` · `repo` · `report` · `stats` · `uptime`

### 👥 Group `50 commands`
`activity` · `add` · `announce` · `anonymous` · `antibot` · `antidelete` · `antiforeign` · `antilink` · `antispam` · `antistatus` · `ar` · `autoreact` · `bizhours` · `chatfilter` · `chatrank` · `del` · `demote` · `gbackup` · `goodbye` · `groupinfo` · `grouplog` · `groupreset` · `grouptransfer` · `hidetag` · `kick` · `leaderboard` · `link` · `list` · `mediaonly` · `mute` · `muteall` · `notes` · `poll` · `promote` · `resetwarn` · `revoke` · `rules` · `setgoodbye` · `seticon` · `setwelcome` · `slowmode` · `tag` · `tagall` · `tempban` · `unmute` · `votekick` · `warn` · `welcome` · `welcome2` · `🆕 Newbie`

### 📦 Harm_category_harassment `1 command`
`autoreply`

### 🕌 Islamic `27 commands`
`Adam` · `Mishary Rashid Alafasy` · `Sahih al-Bukhari` · `asmaul` · `dhikr` · `dua` · `duas99` · `fasting` · `fiqh` · `hajj` · `hijri` · `iftar` · `islamicdate` · `islamichistory` · `islamicname` · `islamicquiz` · `juz` · `prayer` · `quran` · `ramadan` · `sadaqah` · `sahih` · `schedule` · `seerah` · `surah` · `tafsir` · `zakat`

### 📦 Media `10 commands`
`addtext` · `blur` · `circle` · `deepfry` · `enhance` · `gif` · `grayscale` · `invert` · `pixelate` · `triggered`

### 👑 Owner `20 commands`
`autoread` · `autostatusview` · `autotyping` · `block` · `broadcast` · `changelog` · `chatbot` · `eval` · `exec` · `feedback` · `fullbackup` · `globalban` · `maintenance` · `premium` · `restart` · `restore` · `setprefix` · `shutdown` · `unblock` · `update`

### 🔍 Search `11 commands`
`anime` · `animesearch` · `antonym` · `book` · `country` · `detectlang` · `imdb` · `manga` · `recipe` · `synonym` · `urban`

### 🔧 Utility `42 commands`
`afk` · `afklist` · `avatar` · `base64` · `bmi` · `calc` · `carbon` · `color` · `count` · `crypto` · `currency` · `define` · `diary` · `encode` · `font` · `github` · `hexcolor` · `iplookup` · `mathsolve` · `news` · `ocr` · `password` · `pastebin` · `profile` · `qr` · `qrread` · `reminder` · `shorten` · `speedtest` · `ss` · `sticker` · `timezone` · `todo` · `toimg` · `tp` · `tts` · `unitconvert` · `vcf` · `vv` · `weather` · `whois` · `wiki`


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
  <i>300 commands · 14 categories · Powered by Baileys & Gemini AI</i>
</p>