const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Moderasyon yardım menüsünü görüyorsunuz.")
.setThumbnail("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setDescription(`Komutları uygulamadan önce doğru düşündüğünüzden emin olun.

**» .ban** : İstediğiniz kişiyi banlar.

 **» .küfürengel** : Sunucuda küfür etmenize izin vermez.

 **» .otorol** : Otorol mesajı ve otorol ayarlar.

 **» .nuke** : Kanalı siler tekrardan açar.

 **» .sa-as** : Sa mesajına cevap verir.

 **» .yetkilerim** : Sunucudaki yetkilerinizi gösterir.

 **» .sil** : 1/1000 Arası mesaj siler.

































`) 
       .setImage("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .addField(`»  Discordumuz:`, `  [ Discord Davetimiz ](https://discord.gg/spcCXSxrew) `)// Discordunuz
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