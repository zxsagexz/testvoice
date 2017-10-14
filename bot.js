const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log('I am ready!');
});

client.user.setPresence({ game: { name: 'yourGameGoesHere', type: 0 } });

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setGame(`on ${client.guilds.size} servers`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setGame(`on ${client.guilds.size} servers`);
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

