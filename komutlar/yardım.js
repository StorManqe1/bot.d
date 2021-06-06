const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(``)
    .setColor("YELLOW")
    .setThumbnail(
      ""
     
    )
    .setDescription(
      `!davet Yazarak Beni Ekleyebilirsin <a:darksartik:849710173441622056>`
    )
    .addField(
      `<a:darkrgbdia:849710253401964584>__Moderasyon Yardım__<a:darkrgbdia:849710253401964584>`,
      `<a:darksartik:849710173441622056> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `<a:darkrgbdia:849710253401964584>__Koruma Yardım__<a:darkrgbdia:849710253401964584>`,
      `<a:darksartik:849710173441622056>  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `<a:darkrgbdia:849710253401964584>__Eğlence Yardım__<a:darkrgbdia:849710253401964584>`,
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
