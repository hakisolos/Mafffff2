//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdmaGYxdUNPZk10Q3lKajF4WkF3SlhqS0dKdmVNUS8wejdFamthd0JYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1c5N3VjbHVhUkZCRnhlam4va3pzMHBvSkZ1YkoxTXFvd1RyTnlURklHVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS0pwck1lMmltcWNFbm8zbXJ5eFNKV3d5dUV6NUlySlQ3S0pNcmZSTFZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1MUF1S0Z3ZU9hb2lGVG1Sd0VFVlMwY2hOeXEzOWhKdW5VWnZZdVl6WmtjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9KVXV3SEZWSlB4WUNwZlNJY1pVbGVoVDZjbWMxUFkxTUpaNk1NcnJBWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQVDBiRWJaN3crcHZQSDJlKzJlVGxsS0h5UXk2ZlhPR0tQSEhNZy9SeWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVDd0NTcys1OEpHeGNvS09ra09RaXBXVjc4TTQ3UHNMVU5ydHlPQklVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWVvVVNJK1pybXVVRmFSOUJsakJxZGloT3BXQTZGZVV0UHdjSlVOaDhSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilh4dU1RNVJ4NTRCOWkyWEF0T0xUUGxSbnR2T1BRQ2NxL0x5Y0RQdnd4UllNb0gxRm5mMkF1MHFqTUMxUW5DKy9CaXJNNHlSUlhuaHJBQjI5SEl5bUFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJ6OVAyRTc3Uk1XL3hwcjZ3U25YdEFuejU5bFJWdVBwWm9kb3lHQVFCem53PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzcnFWanZoQlFxYTVwUHh3NTVUUVZBIiwicGhvbmVJZCI6IjI2NzVmZDEyLTIyNmEtNDA2Ni1hMmQwLTRlMDlhY2FlYTE0NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwdWtXZllwYzlQdHNqcmpHQTZjRUFGeHFsRDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1A0YmxpemJqbWxtYk1sem9KMXJKc3IybDJVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhQTlRERkw3IiwibWUiOnsiaWQiOiIyMzQ5MTI3ODQ4MDkxOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi2YXYrdmF2K8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BuOTlxVUNFTU8zZ3JjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBEK0xlZVhHZnJaZVEvbERJNHAxeXR1L1FDRGJIQ2lyZzlUVEFvMG1oRmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZwT0pnUFVCdFdlY0RCbVhmdFJKTnFyNU91a2padWc3MUp4OGdNZ2xlYnJnWWd6eVc1VlJPQmg2WS9rV1B4ZEMyMlNZb1NQMlgzdUJMS2wzV0w2RkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjOEdjclZSeDBPa3lRRGZYcmt1MWpSVE5oT2VpTXlZUHBENzVYSjFoSjZQS0xtNENBRjVvRjdEN3J1WE9GTURJeW12TWF1NGVjdllFdjJBTCt6ZjRCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjc4NDgwOTE6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkQS9pM25seG42MlhrUDVReU9LZGNyYnYwQWcyeHdvcTRQVTB3S05Kb1JZIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1OTk1OTg0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5GUCJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "QUEEN_NIKKA",
  packname: process.env.PACK_NAME || "N I K K A",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
