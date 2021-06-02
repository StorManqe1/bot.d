const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`😋`)
    .setTitle(``)
    .setColor("YELLOW")
    .setThumbnail(
      ""
     
    )
    .setDescription(
      `<a:naber:846785563536523282>  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Moderasyon Komutları__`,
      `<a:naber:846785563536523282> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__Koruma Komutları__`,
      `<a:naber:846785563536523282>  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__Eğlence Komutları__`,
      `<a:naber:846785563536523282>  \`${prefix}eğlence\` `,
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
