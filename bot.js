const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === '!pic') {
    message.reply(message.author.avatarURL);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

