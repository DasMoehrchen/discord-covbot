const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  msg.channel.send("Ich gebe Inzidenz und Zeitpunkt der Erfassung zurück. Alle Daten stammen vom RKI. Es ist wichtig, dass der Ort, für den die Inzidenz genannt werden soll, richtig und vollständig übergeben wird. Ein Beispiel lautet: !cov Stadt München oder !cov Stadtkreis Stuttgart.");
}

module.exports.help = {
  name: "help"
}