const Discord = require(`discord.js`)
const db = require('quick.db');

exports.run = async(client, message)=> {

  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`<@${message.author.id}> İstediğin Kişinin Avatarı <:yumuyumu:844238118365954108>: `)
.setImage(user.displayAvatarURL({dynamic:true})) 
.setTimestamp()
.setColor('#f6ff00')
.setFooter(`Cakar Team`)
message.channel.send(embed)
 }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["avatar","avatarım"],
    permLevel: 0
}

exports.help = {
    name: 'pp',

}