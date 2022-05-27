const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("#eb69e9")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(".moderasyon yardım menüsünü görüyorsunuz.")
.setThumbnail("https://media.discordapp.net/attachments/977159991817564240/978361988134633512/png.png?width=630&height=630")
    .setDescription(`Komutları uygulamadan önce doğru düşündüğünüzden emin olun.



**.ban** : İstediğiniz kişiyi banlar.

 **küfürengel** : Sunucuda küfür etmenize izin vermez.

 **.otorol** : Otorol mesajı ve otorol ayarlar.

 **.nuke** : Kanalı siler tekrardan açar.

 **.sa-as** : Sa mesajına cevap verir.

 **.yetkilerim** : Sunucudaki yetkilerinizi gösterir.

 **.sil** : 1/1000 Arası mesaj siler.

































`) 
       .setImage("https://media.discordapp.net/attachments/857714045251878972/859707586185003028/c36004559186539aaa1802b8bc09de9b.gif")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=860532935559479336&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["m","myardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'moderasyon', 
    description: 'yardım menüsü',
    usage: 'moderasyon'
  };