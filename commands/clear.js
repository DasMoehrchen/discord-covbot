const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  console.log("yay");

  msg.delete();
  clear99(msg);
  msg.channel.send("https://media1.tenor.com/images/72dd48698eba041f9ae5d6e894e312b1/tenor.gif?itemid=17120878");

  async function clear99(msg) {
    await msg.channel.bulkDelete(99);
  }
}

module.exports.help = {
  name: "clear"
}