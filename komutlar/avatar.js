const Discord = require(`discord.js`)
const db = require('quick.db');

exports.run = async(client, message)=> {

  let user = message.mentions.users.first() || message.author
  if(user){
    
const embed = new Discord.MessageEmbed()
//.setAuthor(`${user.tag} adlı kullanıcının avatarı:`)
 .setDescription(`<@${message.author.id}>   İşte Bizim Ekibimiz

<:ravex2022:850393944863801375> Developer

<@769181920168116275> <a:ravex3top:850733040258121728>


<:ravex2022:850393944863801375> Yardım Görevlisi

<@690223697558372358>


<a:MiCat_PikaElma:850830608536305674> Destek Ekibi

<@645992390909231135>

<@834686346115022848>

<@723548751666348172>

<a:para:849709440847577119> Sponsor

<@806972954034307143>

[Destek Sunucu İçin Tıkla](https://discord.gg/sykCBSsmUS)






















`)
.setImage("https://cdn.discordapp.com/attachments/826141237471871016/851466409736667136/standard.gif") 
.setTimestamp()
.setColor('#f6ff00')
.setFooter(`Ravex Bot Ekip`)
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