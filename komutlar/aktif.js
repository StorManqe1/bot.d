const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("MENTION_EVERYONE")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("RED");
 
    message.channel.send(embed);
    return;
  }
  
  const embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setDescription(
      `*** SUNUCU AKTİFTİR ***

**Sunucuya Giriş Sağlayabilirsiniz, Sorularınız Veya Sorunlarınız İçin Destek Odalarını Kullanabilirsiniz!**

**𝐒𝐮𝐧𝐮𝐜𝐮 𝐈𝐏 : N/A
𝐓𝐞𝐚𝐦𝐒𝐩𝐞𝐚𝐤 𝐈𝐏 : N/A**

***SİMPLE HOSTİNG / x / SİMPLE HOSTİNG***

`
    )
    .setImage("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450");
  client.channels.cache.get("992529074675257425").send(embed);

  const ping = ["@here"];
  client.channels.cache.get("992529074675257425").send(ping);

message.channel
 // let gonderilecek_kisi = bot.users.cache.get("965886720606343178")//rapor edilecek kişinin idsi
    .send("Başarılı bir şekilde aktif bildirisi geçildi.")
    .then((message) => message.delete({ timeout: 5000 }));
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "aktif",
  description: "",
  usage: "",
};