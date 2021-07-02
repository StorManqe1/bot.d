const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(``)  
.setTitle("Yubu Koruma Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    



 **!antiraid** : Bildiğiniz Antiraid

 **!botizni** : Bildiğimiz Bot Sistemi

 **!reklamengel** : Sunucunuzdaki Reklamları Engeller

 **!modlog** : Sunucudaki Herşeyi Oraya Atar Denetim Kaydı Gibi

 **!capsengel** : Sunucuda Caps Açılmasına İzin Vermez

 **!everengel** : Sunucuda Ever Here Atılmasına İzin Vermez

 **!kanalkoruma** : Birinin Kanal Açmasına Silmesine İzin Vermez

 **!rolkoruma** : Birinin Rol Açmasına Silmesine İzin Vermez

 **!güvenlik** : Sunucuya Giren Kullanıcıların Bilgilerini Atar




























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
    aliases: ["k","kyardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'koruma', 
    description: 'yardım menüsü',
    usage: 'koruma'
  };