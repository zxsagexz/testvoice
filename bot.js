const Discord = require('discord.js');
const client = new Discord.Client();
const Commando = require('discord.js-commando');
const Request = require('request');
const Bot = new Commando.Client();

Bot.client.setGame("!help for help");


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('message', message => {
  if (message.content === '!picture') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', function(message) {
    if (message.content == "!clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

