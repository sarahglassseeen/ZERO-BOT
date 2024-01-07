module.exports.config = {
    name: "ad",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zero",
    description: "Kiểm tra thông tin admin .",
    commandCategory: "Thông tin admin",
    usages: "adm",
    cooldowns: 0,
    dependencies: {
      "request":"",
      "fs-extra":"", 
      "axios":""
    }
  };
  
  module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
    var link = [
  "https://i.imgur.com/rUIYng2.mp4",
  "https://imgur.com/4ziDwPx.mp4",
  "https://imgur.com/ljrJ3zQ.mp4",
  "https://imgur.com/GOFuG1a.mp4",
  "https://imgur.com/bNYhX1D.mp4",
  "https://imgur.com/rTFAkTO.jpg",
  
    ];
    var callback = () => api.sendMessage({body:`===ADMIN===
  👀 Tên: Sarah
  💮 Biệt danh: SGB-GBS 
  ❎ Tuổi: 1 tuổi
  👤 Giới tính: Nam
  💫 Chiều cao cân nặng: 1m?? x ??kg
  💘 Mối quan hệ: Không có
  🌎 Quê quán: Vĩnh Phúc
  👫 Gu: Ghệ đích bự 
  🌸 Tính cách : Chịu
  🌀 Sở thích: sục cu =) , xem sếch và haiten , thích lập trình , chơi genshin impact
  💻Contact💻
  ☎ SĐT&Zalo: 113 
  🌐 Facebook:https://www.facebook.com/SennSaraGall
  ✉️ Email:jjfkphong@gmail.com
  🌸Lưu ý : 『 𝙆𝙝ô𝙣𝙜 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩,𝙆𝙝ô𝙣𝙜 𝙘𝙝ử𝙞 𝙗𝙤𝙩!!』
  `,attachment: fs.createReadStream(__dirname + "/cache/8.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
        return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
     };