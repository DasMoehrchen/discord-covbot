console.log("Beep boop! 🤖");
const botconfig = require("./botconfig.json")
require("dotenv").config();


const Discord = require("discord.js");
const client = new Discord.Client();

//Laden aller Befehle
client.commands = new Discord.Collection();

const fs = require("fs");

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Keine Befehle gefunden.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`)
        client.commands.set(props.help.name, props)
    });
});

//Verbingung zu Discord

client.login(process.env.BOTTOKEN);

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`)
    client.user.setPresence({
        status: "online",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    });
});
//Ende des Anfangs


client.on("message", (message) => {

    if (message.author.bot) return
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf-8"))

    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (prefix != cmd.substring(0, prefix.length)) return;

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client, message, args)
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});