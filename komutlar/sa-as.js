const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription("<a:notik:844598526843027486>  **Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Omalısınız!**"))
const yrnex = args.join(` `);
  if(!yrnex) message.channel.send(new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **-sa-as aç & kapat**`)
  .setColor("RED")
)
if(yrnex === "aç") {
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Açıldı <a:darksartik:849710173441622056>  `)
  .setColor("GREEN")
.setFooter(""))

}
else if(yrnex === "kapat") {
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Kapatıldı <a:darksartik:849710173441622056> `)
  .setColor("RED")
  .setFooter(""))
}
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ['sa-as'],
 permLevel: 0,
};

exports.help = {
 name: 'sa-as',
 description: 'sa-as',
 usage: 'sa-as'
};
