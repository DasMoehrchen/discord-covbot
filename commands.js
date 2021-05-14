const cov = require('./commands/cov.js');
const help = require('./commands/test.js');
const clear = require('./commands/clear.js')

const valid_commands = {
  cov,
  help,
  clear
}

module.exports = function (msg) {
  let words = msg.content.split(' ');
  let command = words.shift();
  if (command.charAt(0) == '!') {
    command = command.substring(1);
    if (command === "cov" || command === "help" || command === "clear") {
      valid_commands[command](msg, words);
    } else {
      msg.channel.send("So nicht!");
    }

  }
}