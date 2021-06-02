const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Boruto Moderasyon Komutları")
.setThumbnail("")
    .setDescription(`



<:boruto:849713659264368731>**b!ban** : İstediğiniz Kişiyi Banlar

<:boruto:849713659264368731> **b!küfürengel** : Sunucuda Küfür Etmenize İzin Vermez

<:boruto:849713659264368731> **b!otorol** : Otorol Mesajı Ve Otorol Ayarlar

<:boruto:849713659264368731> **b!nuke** : Kanalı Siler Tekrardan Açar

<:boruto:849713659264368731> **b!sa-as** : Sa Mesajına Cevap Verir

<:boruto:849713659264368731> **b!yetkilerim** : Sunucudaki Yetkilerinizi Gösterir

<:boruto:849713659264368731> **b!sil** : 1/1000 Arası Msg Siler































`) 
       .setImage("")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=849558767845638145&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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