module.exports.config={
name:"upt",
version:"1.0.0",
hasPermssion:0,
credits:"ManhG",
description:"Kiểm tra thời gian bot đã online",
commandCategory:"tiện ích",
cooldowns:5,
dependencies:{}
},
module.exports.run=async({api:e,event:o})=>{
  const s = process.uptime(),
n=Math.floor(s/86400),
t=Math.floor(s%86400/3600),
r=Math.floor(s/60%60),
a=Math.floor(s%60);return e.sendMessage([n,t,r,a].map((e=>e<10?"0"+e:e)).filter(((e,o)=>"00"!==e||o>0)).join(":"),o.threadID,o.messageID)};