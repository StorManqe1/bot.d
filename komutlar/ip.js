const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("SPEAK")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Ne yazık ki bu komutu kullanmaya yetkin yok.")
//   .setImage('https://c.tenor.com/JOjYkhabalwAAAAS/artixtr.gif')
      .setColor("BLUE");
 
    message.channel.send(embed);
    return;
  }
  // https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setThumbnail("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setDescription(
      `*** SUNUCU İP'Sİ**

**𝐒𝐮𝐧𝐮𝐜𝐮 𝐈𝐏 : N/A
𝐓𝐞𝐚𝐦𝐒𝐩𝐞𝐚𝐤 𝐈𝐏 : N/A**

***SİMPLE HOSTİNG / X / SİMPLE HOSTİNG***

`
    )
    .setImage("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450");
  client.channels.cache.get("992529074675257425").send(embed);

  const ping = [""];
  client.channels.cache.get("992529074675257425").send(ping);

  message.channel
    .send("Başarılı bir şekilde ip bildirisi geçildi.")
    .then((message) => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "ip",
  description: "",
  usage: "ip",
};
