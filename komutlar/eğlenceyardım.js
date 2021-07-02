const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("ORANGE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("YuBu Eğlence Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    

 **!fbi** : Fbi Çağırır (ironi)

 **!saat** : Size Saati Gösterir

 **!balıktut** : Balık Tutarsınız 

 **!aduket-çek** : İstediğiniz Kişiye Aduket Çekersiniz

 **!aşk** : Onla Olan Aşk Oranınızı Ölçer :D

 **!espri** : Bot Size Espri Yapar

 **!vine** : Komik Bi Vine Gösterir

 **!kaçcm** : Kaç Cm OLduğunu Söyler :D

 **!yazankazanır** : Arkadaşınızla Yazan Kazanır Oynarsınız

 **!spo @etiket** : İstediğniz Kişinin Spotify Bilgisini Gösterir































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
    aliases: ["e","eyardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'eğlence', 
    description: 'yardım menüsü',
    usage: 'eğlence'
  };