const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(``)
    .setTitle(``)
    .setColor("PURPLE")
    .setImage("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setThumbnail(  ""
     
    )
    .setDescription(
      `Yardım menüsü hakkında bilgiler aşağıdadır.`
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
  enabled: false,
  guildOnly: false,
  aliases: ["Yardım","y","bilgi"],
  permLevel: 0
};
exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};