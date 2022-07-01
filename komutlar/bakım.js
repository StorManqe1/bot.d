const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("MENTION_EVERYONE")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("Ne yazık ki bu komutu kullanmaya yetkin yok.")
      .setColor("RED");
 
    message.channel.send(embed);
    return;
  }
  
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setDescription(
      `*** SUNUCU BAKIMDA ***

**Sunucumuz Bakımda en kısa sürede sorunların giderilip tekrar dan buluşmak üzere.**

**Lütfen sohbeti gereksiz meşkul etmeyelim.
Lütfen yetkileleri etiketlemeyelim.**

***SİMPLE HOSTİNG / x / SİMPLE HOSTİNG***

`
    )
    .setImage("https://c.tenor.com/KqFi_DkTwcQAAAAC/respectrp.gif");
  client.channels.cache.get("992529074675257425").send(embed);

  const ping = ["@here"];
  client.channels.cache.get("992529074675257425").send(ping);

  message.channel
    .send("Başarılı bir şekilde bakım bildirisi geçildi.")
    .then((message) => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "bakım",
  description: "",
  usage: "bakım",
};
