const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzY4NzU2OTAyMjMxODAxODU2.DMOnJw.QY7_AWlPD6pmVugtvqJ0CWGzMbM);
