const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let ravex = message.guild;
  ravex
    .fetchBans()
    .then(ravex =>
    message.channel.send(` **Sunucunuzda ${ravex.size} banlanmış üye bulunmaktadır.** `)
  )
    .catch(console.error);
};

exports.conf = {
  enabled: true,
  runIn: ["bansay"],
  aliases: ["bansay"],
  permLevel: 0
};

exports.help = {
  name: "bansay",
  description: "Sunucudan banlanan kişilerin sayısını gösterir",
  usage: "bansay"
};