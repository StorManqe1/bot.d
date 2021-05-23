const Discord = require("discord.js");
exports.run = async (client, message, args, level) => {
  const toplamkomut = new Discord.MessageEmbed()


    .setAuthor(`  | Discord Bot Toplam Komut Sayısı`)
    .setDescription(
      `  **  Toplam**  \`` +
        client.commands.size +
        `\` **Komut Vardır!**`
    )
    .setColor("#00ff00")
    .setTimestamp()
    

  return message.channel.send(toplamkomut);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "komut",
  description: "Toplam Komut",
  usage: "toplamkomut"
};
