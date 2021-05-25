const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın <a:topares:846775019551588453> '"
    );

  let chanel = message.mentions.channels.first();
  if (!chanel)
    return message.reply(
      "Lütfen güvenlik mesajlarının gideceği kanalı etiketle  <a:topares:846775019551588453>"
    );

  db.set(`güvenlik.${message.guild.id}`, chanel.id);
  const basari = new Discord.MessageEmbed().setDescription(
    `Güvenlik kanalı başarıyla ${chanel} olarak ayarlandı`
  );
  return message.channel.send(basari);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: "güvenlik",
  description: "Yeni hesap açan kullanıcıları belirlediğiniz kanala atar.",
  usage: "güvenlik #kanal"
};
