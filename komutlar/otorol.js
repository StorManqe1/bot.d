const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setAuthor(" Ayarlamalı | OtoRol Sistem", client.user.avatarURL())
    .setColor("BLUE")
    .addField(
      " Herşey Senin İçin",
      "__**Oto-Rol-Ayarla**__  **Otorolü Ayarlar.**\n Örnek: `!oto-rol-ayarla @rol #log` \n \n __**!otorol-msg**__   **Otorol Mesajını Ayarlar.** \n Örnek: `!otorol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz`"
    )

    .addField(
      "__**Kullanabileceğiniz Komutlar **__",
      `
**-uye-**  \`Üyeyi Etiketler.\`
**-rol-**  \`Rolün İsmini Ekler.\`
**-server-**  \`Server İsmini Yazar.\`
**-uyesayisi-** >> \`Üye Sayısını Atar.\`
**-botsayisi-**  \`Bot Sayısını Atar.\`
**-kanalsayisi-**  \`Kanal Sayısını Atar.\`
**-bolge-**  \`Sunucu Bölgesinin İsmini Atar.\`
**-kalanuye-**  \`Hedefe Kaç Kişi Kalmış Gösterir.\`
**-hedefuye-**  \`Hedef Rakamı Gösterir.\`
`
    )
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "otorol",
  description: "sayaç",
  usage: "sayaç"
};
