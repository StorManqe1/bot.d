const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Moderasyon Komutları")
.setThumbnail("")
    .setDescription(`



<a:naber:846785563536523282> **m!ban** : İstediğiniz Kişiyi Banlar

<a:naber:846785563536523282> **m!küfürengel** : Sunucuda Küfür Etmenize İzin Vermez

<a:naber:846785563536523282> **m!otorol** : Otorol Mesajı Ve Otorol Ayarlar

<a:naber:846785563536523282> **m!nuke** : Kanalı Siler Tekrardan Açar

<a:naber:846785563536523282> **m!sa-as** : Sa Mesajına Cevap Verir

<a:naber:846785563536523282> **m!yetkilerim** : Sunucudaki Yetkilerinizi Gösterir

<a:naber:846785563536523282> **m!sil** : 1/1000 Arası Msg Siler































`) 
       .setImage("")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=846773819272331265&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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