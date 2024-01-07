module.exports.config = {
    name: "tim",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Zero",
    description: "Tăng tim",
    commandCategory: "Tăng tim ",
    usages: "tim",
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

    if (args.length !== 2 || args[0] !== "/tim") {
        return api.sendMessage("Đang tiến hành random từ 50 - 300 tim", event.threadID);
    }

    const videoLink = args[1];

    if (!videoLink.startsWith("http")) {
        return api.sendMessage("Link video không hợp lệ", event.threadID);
    }

    var callback = () => api.sendMessage({body:`Đang tiến hành tăng tim`, attachment: fs.createReadStream(__dirname + "/cache/8.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
    return request(encodeURI(videoLink)).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close", () => callback());
};
