console.log("Beep boop! 🤖");

require("dotenv").config();


const Discord = require("discord.js");
const client = new Discord.Client();



//Verbingung zu Discord

client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log('☣');
}
//Ende des Anfangs
const commandHandler = require("./commands");
client.on("message", commandHandler);

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});