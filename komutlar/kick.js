const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
let arsix = message.mentions.users.first()
let sebep = args.slice(1).join(' ')
if (arsix) {
const Arsix = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription('Kimi Kickleyeceğini Yazmalısın!')
return message.channel.send(Arsix)
}
if(arsix.id === client.user.id) {
const Arsix = new Discord.MessageEmbed()
.setColor('RED') //sa
.setDescription('Kendi Komutumla Benimi Vurcaktın?!')
return message.channel.send(Arsix)
}
if(arsix.id === message.author.id) {
const Arsix = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('Dostum Kendini Kickleyemezssin!')
return message.channel.send(Arsix)
}
if(!sebep) {
const Arsix = new Discord.MessageEmbed()
.setColor('RED')
.setDescription('Bir Sebep Belirtmelisin!')
return message.channel.send(Arsix)
}
message.guild.member(arsix).kick();
  
const Arsix = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`${Arsix} Adlı Kişi Başaryla **${sebep}** Sebebinden Dolayı ${message.auhtor.tag} Tarafından Sunucudan Uçuruldu!`)
return message.channel.send(Arsix)
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: "kick"
}