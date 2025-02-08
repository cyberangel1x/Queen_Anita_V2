//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kd2401423@gmail.com";
global.location = "Abia, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/cyberangel1x";
global.gurl = process.env.GURL || "https://wa.me/message/KBTG73DNZLQUH1";
global.website = process.env.GURL || "https://wa.me/message/KBTG73DNZLQUH1";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://drive.google.com/file/d/154PVW812XHpBHce2eQbpXZamrYUirOvO/view?usp=drivesdk";
global.devs = "https://t.me/co_bot1";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+2349167807909";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FUZDN0L0ROMGtWYWlSaW1DS2V4a1VGOXBjakJEOVdkSGZjRmxWbHRFbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmZlMTZFeTEyOC91MGFzWXdsT3Q3UXJaU3V0V1lEZ3p3WForRjVla3NHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QzJvZ21XalNIZzJqSFA3TEFPR0RqekF3V0VXTEI4NEJHSnZkY1NCSFdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZMUlFb09UU1ZOQVA1SXF6cy9YU3k3TjN3bUpPZ2dhUlVYMGFVZU5mZjEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQa0VCUEd1TlZmMnQzSDA4WjZGeUYyWHB4Q1R0c3ZQODRIQmtBa28wbVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InltOVFjaHpFVGRaTnd2K2VPMDJUYWFrK2FOQUcrcHFhQ1FqY3RFTnliMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hBWVA0NkI2WmZUei9VSUx0amZqS3VKa21DdjE1UWk4SERDUmxuL1YyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2dicjg4UEI4ZUptTzA0Sy9tNWxTWjBsaGIvcjRiZnNhbDBOY3diVmp3RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtzYlhWNHhTVjg5TVFIM3JVWHVyTkdFK2xYVnoySHRjS0dmTzY1UGlYR0ZMcDN6Si9yQlUwTldOMCt2NE5EWDZVQjdsYzVWSVlkZncydkgwR3pTZ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJiUExReVdDd0dIUXJuay9rVW1FTnVtWlJsMTY4NWNsdGNMNWIya2FSK2lZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEX0NyVmY5aVIzR1RpTWVwa0dDSmFBIiwicGhvbmVJZCI6ImY1ZTY0NjQ3LTliZTMtNGI4ZC05NzI1LTUzMTBlYjFmZWQxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTM0ZRSnpKUVNWYys0b0EzdE9SZ05mS0Q1ZW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3ZscWgycnhEVS8wcDNoZXViVWthUndHOFVrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk2QThZNUxZIiwibWUiOnsiaWQiOiIyMzQ5MTY3ODA3OTA5OjE5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik5FWFVT4oG04oG3In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPKzh0dWtCRUxmL203MEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3SFZrKzJHU0w0SmNjZUpuOVVscHltcVNjaWw0SWtqUitOd1Baa29PTEJnPSIsImFjY291bnRTaWduYXR1cmUiOiJzOFMxU2xsTlowdUVyY2Y1MmppWndQUzF1NytLWDJDTXJUaTBNZHlpakg3MWtoOWx4d1dabkNZQWdCR0hDM041WUxTOHBmZ0NRRlk1OFNxSlNRRjhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoickpSL28xWW0vR3RoZk1RcmZSaG1DcUF4T08yTS9GL01aN2FkQytsemFsR3dkVHFRbHJTY1NUc0RqZHN2Tk96NmtXRjZ1OUZKUjRFYitLenJBMDMyZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY3ODA3OTA5OjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV4MVpQdGhraStDWEhIaVovVkphY3Bxa25JcGVDSkkwZmpjRDJaS0Rpd1kifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzg5OTc3MDN9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "9.0.0",
  caption: process.env.CAPTION || "`NEXUS-V9`",
  author: process.env.PACK_AUTHER || "NEXUS-V9",
  packname: process.env.PACK_NAME || "N E X U S",
  botname: process.env.BOT_NAME || "NEXUS-BOT",
  ownername: process.env.OWNER_NAME || "NEXUS",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N E X U S").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
