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



<:boruto:849713659264368731>**!ban** : İstediğiniz Kişiyi Banlar

<:boruto:849713659264368731> **!küfürengel** : Sunucuda Küfür Etmenize İzin Vermez

<:boruto:849713659264368731> **!otorol** : Otorol Mesajı Ve Otorol Ayarlar

<:boruto:849713659264368731> **!nuke** : Kanalı Siler Tekrardan Açar

<:boruto:849713659264368731> **!sa-as** : Sa Mesajına Cevap Verir

<:boruto:849713659264368731> **!yetkilerim** : Sunucudaki Yetkilerinizi Gösterir

<:boruto:849713659264368731> **!sil** : 1/1000 Arası Msg Siler

<:boruto:849713659264368731> **!say** : Sunucunuzda Kaç Kişi Kaç Kanal Olduğunu Söyler































`) 
       .setImage("")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=851094764127911936&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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