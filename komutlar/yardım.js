const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(``)
    .setColor("YELLOW")
    .setImage("")
    .setThumbnail(  ""
     
    )
    .setDescription(
      `Atlas Bot Her Daim Hizmette `
    )
    .addField(
      `__Moderasyon__`,
      ` \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__Koruma__`,
      `  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__Eğlence__`,
      `  \`${prefix}eğlence\` `,
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
  name: "komut-bilgi",
  description: "Yardım Menüsü",
  usage: "yardım"
};