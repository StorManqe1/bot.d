const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(``)
    .setColor("red")
    .setImage("https://media.discordapp.net/attachments/608711485849337856/860395805692657685/image0_1.gif")
    .setThumbnail(  ""
     
    )
    .setDescription(
      `<:kalpkurabiye:860537958683901952> YuBu Bot Her Daim Hizmette <:kalpkurabiye:860537958683901952>`
    )
    .addField(
      `__<:akano_selam:860538170801389598>Moderasyon<:akano_selam:860538170801389598>__`,
      ` \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `__<:akano_selam:860538170801389598>Koruma<:akano_selam:860538170801389598>__`,
      `  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `__<:akano_selam:860538170801389598>Eğlence<:akano_selam:860538170801389598>__`,
      `  \`${prefix}eğlence\` `,
      true
  
    );
  return message.channel.send(embed);
 

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Yardım","y","bilgi"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};