const Discord = require(`discord.js`)
const db = require('quick.db');

exports.run = async(client, message)=> {

  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`<@${message.author.id}> Dostum Beni Eklemek Mi İstedin

Dostum Çok Teşekkürler Yeni Arkadaşlar Edineceğim İçin
Çok Heyecanlıyım Ehehe

He Buda Davet Linkim :D
[Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=860532935559479336&permissions=8&scope=bot) 




















`)
.setImage("https://media.discordapp.net/attachments/857714045251878972/860420448482754580/13142.gif") 
.setTimestamp()
.setColor('ORANGE')
.setFooter(`Dvt Dvt Dvt Seri`)
message.channel.send(embed)
 }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ravex","ekip"],
    permLevel: 0
}

exports.help = {
    name: 'rekip',

}