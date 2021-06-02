const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Boruto Hizmette😋`)
    .setTitle(``)
    .setColor("YELLOW")
    .setThumbnail(
      ""
     
    )
    .setDescription(
      `<:boruto:849713659264368731>  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Moderasyon Komutları__`,
      `<:boruto:849713659264368731> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__Koruma Komutları__`,
      `<:boruto:849713659264368731>  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__Eğlence Komutları__`,
      `<:boruto:849713659264368731>  \`${prefix}eğlence\` `,
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
