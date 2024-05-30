const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_16_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICA4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDY4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NixcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICA5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAxNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlg0djlqNWJ2R0Y4NHdGdWkyN0FPZVVOSTJ1a1BaM3dIMkU4bnV0dnc1RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMV85WGJCOTVRcTJlUTB5V2NyeWtNZ1wiLFxuICBcInBob25lSWRcIjogXCJhMGZmYjllMy0wN2RjLTRjNWUtOGUwZS04ZjVhNmMyZGQ1OTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxODksXG4gICAgICAxMjUsXG4gICAgICAyLFxuICAgICAgMjI4LFxuICAgICAgODQsXG4gICAgICAxNixcbiAgICAgIDExMCxcbiAgICAgIDIyLFxuICAgICAgMTA0LFxuICAgICAgNzcsXG4gICAgICAzMCxcbiAgICAgIDYwLFxuICAgICAgNjYsXG4gICAgICA1NSxcbiAgICAgIDE4MyxcbiAgICAgIDIwMSxcbiAgICAgIDk3LFxuICAgICAgMTM5LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDMwLFxuICAgICAgMTM4LFxuICAgICAgMTQwLFxuICAgICAgMTQ5LFxuICAgICAgMTgzLFxuICAgICAgMTQzLFxuICAgICAgMjAwLFxuICAgICAgMTE3LFxuICAgICAgMTM3LFxuICAgICAgMTEwLFxuICAgICAgMTMxLFxuICAgICAgMTY0LFxuICAgICAgMTEsXG4gICAgICA1NixcbiAgICAgIDEyMSxcbiAgICAgIDE3LFxuICAgICAgMjExLFxuICAgICAgNzQsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUDVDQUw0WUVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MDk3MTgxNjk1NjozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmcgTWFrb1wiLFxuICAgIFwibGlkXCI6IFwiMjEzNTYzMjcyNjA5OTcyOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1Bpb2xza0VFUGZ4eUxJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXd0Z0F5aEV2N2xFZEFBSmwxQU5kTzZLNDN5U08zelAzRGdKY0tTT2ltdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJEQW5aMHVGT3lEcjQ4bkczZE1rQ3N0bndBOUdNbjhhNjNPem02RW1lRnlLSm1iTGEzeTk4OGtLeUpGWkd3a3VOTGRxaVFKcjhsR2hRN2x5Y2oyZHlEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkd09yMFEwVTBnRkdqZVg2Z2NDVFlmM05JYkRzNUdCOEtFVEFIYXUrdHo0ekxsUlYwVkVqbERQMTBJdTdLdlFXclhqK2hZT3E3T1lDQ3lyUEltU0xCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzE4MTY5NTY6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NjY0NTcxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
