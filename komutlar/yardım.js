const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Ares 😋`)
    .setTitle(``)
    .setColor("YELLOW")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/826141237471871016/846771821542244382/d208628656b74f3ffc7e36dc5846a71b.png"
    )
    .setDescription(
      `<a:topares:846775019551588453>  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:topares:846775019551588453> \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `<a:topares:846775019551588453>  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__Ayarlar Komutlar__`,
      `<a:topares:846775019551588453>  \`${prefix}eğlence\` `,
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
