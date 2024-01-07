/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
    name: "antiout",
    version: "1.1.2",
    hasPermssion: 1,
    credits: "ProCoderMew",
    description: "Tự động add lại thành viên out chùa | Không chắc chắn là add lại được tất cả.",
    commandCategory: "Quản Trị Viên",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "path": "",
        "fs-extra": ""
    }
};

module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const log = require(process.cwd() + '/utils/log');
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    if (!existsSync(path)) {
        const obj = {
            antiout: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('antiout')) data.antiout = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }

   /* log("[!] Lưu Ý [!]", '[ ANTIOUT ]');
    log("- Không sử dụng module vào mục đích quấy rối.", '[ ANTIOUT ]');
    log("- Vi phạm điều trên sẽ được góp mặt trong gban.", '[ ANTIOUT ]');
    log("[!] Vì 1 môi trường trong sạch hơn [!] ", '[ ANTIOUT ]');
    log("- Hãy report những người có hành động như vậy cho Admin MiraiProject.", '[ ANTIOUT ]');*/
}

module.exports.run = async function({ api, event }) {
    const { writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const path = resolve(__dirname, 'cache', 'meewmeew.json');
    const { threadID, messageID } = event;
    const database = require(path);
    const { antiout } = database;
    if (antiout[threadID] == true) {
        antiout[threadID] = false;
        api.sendMessage("⊰᯽⊱─ 𝐌𝐎𝐃𝐄 𝐎𝐅𝐅 ─⊰᯽\n Đ𝐚̃ 𝐭𝐚̆́𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐚𝐧𝐭𝐢𝐨𝐮𝐭 ✅\n 𝐁𝐚̂𝐲 𝐠𝐢𝐨̛̀ 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧 𝐜𝐨́ 𝐭𝐡𝐞̂̉ 𝐨𝐮𝐭 𝐭𝐮̛̣ 𝐝𝐨 đ𝐮̛𝐨̛̣𝐜 𝐫𝐨̂̀𝐢 🐧", threadID, messageID);
    } else {
        antiout[threadID] = true;
        api.sendMessage("⊰᯽⊱─ 𝐌𝐎𝐃𝐄 𝐎𝐍 ─⊰᯽\n Đ𝐚̃ 𝐤𝐢́𝐜𝐡 𝐡𝐨𝐚̣𝐭 𝐭𝐡𝐚̀𝐧𝐡 𝐜𝐨̂𝐧𝐠 𝐜𝐡𝐞̂́ đ𝐨̣̂ 𝐚𝐧𝐭𝐢𝐨𝐮𝐭 ✅\n 𝐊𝐡𝐨̂𝐧𝐠 𝐚𝐢 đ𝐮̛𝐨̛̣𝐜 𝐫𝐨̛̀𝐢 𝐤𝐡𝐨̉𝐢 đ𝐚̂𝐲 𝐤𝐡𝐢 𝐜𝐡𝐮̛𝐚 𝐜𝐨́ 𝐬𝐮̛̣ 𝐜𝐡𝐨 𝐩𝐡𝐞́𝐩 𝐜𝐮̉𝐚 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 𝐜𝐚̉ 🐧", threadID, messageID);
    }
    writeFileSync(path, JSON.stringify(database, null, 4));
  }