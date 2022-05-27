const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(``)
    .setColor("RED")
    .setImage("https://media.discordapp.net/attachments/977159991817564240/978361854902542367/noble_animationgiff.gif")
    .setThumbnail(  ""
     
    )
    .setDescription(
      `.yardım menüsü hakkında bilgiler aşağıdadır.`
    )
    .addField(
      `Discord güvenliği.`,
      ` \`${prefix}moderasyon\``,
      true
    )
    .addField(
      `Discord rol, kanal koruması.`,
      `  \`${prefix}koruma\` `,
      true
    )
   .addField(
      `Discord eğlence menüsü.`,
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