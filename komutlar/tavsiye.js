// Batuhan.exe tarafından kodlanmıştır.
const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
// Batuhan.exe tarafından kodlanmıştır.
let tavsiye = args.join(" ").slice(0);
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **Tavsiyenize Yazar mısın ?**`)
  .setColor("#00ff88")
  .setFooter(`Simple Tavsiye Ettiğiniz İçin Teşşekür Ediyor`)
  if(!tavsiye) return message.channel.send(sebep2);
let user = message.author.tag;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let gonderilecek_kisi = bot.users.cache.get("965886720606343178")//rapor edilecek kişinin idsi
let embed = new Discord.MessageEmbed()
.setTitle("Tavsiye Bildiri")
.setThumbnail(bot.user.avatarURL())
.addField("Tavsiye", tavsiye)
.addField("Sunucu Adı", guild)
.addField("Sunucu ID", guildid)
.addField("Rapor Eden", user, true)
.setColor("GOLD")
   message.react("✅");

// Batuhan.exe tarafından kodlanmıştır.
message.channel.send("**» Tavsiyeniz Başarı İle Bot Sahibime İletildi. Teşekkür Ederiz. » Cansınız efendim <3**")
gonderilecek_kisi.send(embed).then(i => i.react("⏳"))
// Batuhan.exe tarafından kodlanmıştır.
}
// Batuhan.exe tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};
// Batuhan.exe tarafından kodlanmıştır.
exports.help = {
  name: 'tavsiye',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'prefix+bug-bildir <bug>'
}
// Batuhan.exe tarafından kodlanmıştır.