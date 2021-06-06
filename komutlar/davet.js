const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setThumbnail('https://64.media.tumblr.com/aac558c41bfa26c2eb922ad0acf08aef/0cf5b3cb58c95d4b-f5/s540x810/b80e42653df9b21b6e8ba5d6eb3e92216096e54f.gifv')
  .setDescription(`Bu Botu Sunucuna Ekleyebilirsin Linki Aşşağıda

[Ravex İ Davet Et](https://discord.com/oauth2/authorize?client_id=851094764127911936&scope=bot&permissions=1074129984) 

`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}