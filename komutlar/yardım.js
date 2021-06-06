const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Rave`)
    .setTitle(``)
    .setColor("YELLOW")
    .setThumbnail(
      ""
     
    )
    .setDescription(
      `Ravex Yardıma Hazır <a:darksartik:849710173441622056>`
    )
    .addField(
      `__Moderasyon Komutları__`,
      `<a:darksartik:849710173441622056> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__Koruma Komutları__`,
      `<a:darksartik:849710173441622056>  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__Eğlence Komutları__`,
      `<a:darksartik:849710173441622056>  \`${prefix}eğlence\` `,
      true

    );
  return message.channel.send(embed);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
