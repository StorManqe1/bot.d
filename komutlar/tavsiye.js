//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Tavsiyenize Yazar mısın ?**`)
  .setColor("#00ff88")
  .setFooter(`Ravex Tavsiye Ettiğiniz İçin Teşşekür Ediyor`)
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("769181920168116275")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("GOLD")
   message.react("<a:darksartik:849710173441622056>");

//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
message.channel.send("<a:darksartik:849710173441622056> **| Tavsiyeniz Başarı İle Bot Sahibime İletildi. Teşekkür Ederiz. | Al Buda Bizden Olsun <:MiCat_turkcayi:850830543692365835>**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.
exports.help = {
  name: 'tavsiye',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
//Volkan Hamarat (🔲 𝕮𝖗𝖊𝖆𝖙𝖔𝖗 🔲 КΛЯΛКUЯT#0399) tarafından kodlanmıştır.