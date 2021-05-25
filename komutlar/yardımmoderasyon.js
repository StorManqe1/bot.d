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



<a:topares:846775019551588453> **a!ban** : İstediğiniz Kişiyi Banlar

<a:topares:846775019551588453> **a!küfürengel** : Sunucuda Küfür Etmenize İzin Vermez

<a:topares:846775019551588453> **a!otorol** : Otorol Mesajı Ve Otorol Ayarlar

<a:topares:846775019551588453> **a!nuke** : Kanalı Siler Tekrardan Açar

<a:topares:846775019551588453> **a!sa-as** : Sa Mesajına Cevap Verir

<a:topares:846775019551588453> **a!yetkilerim** : Sunucudaki Yetkilerinizi Gösterir































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