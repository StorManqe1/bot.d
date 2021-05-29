const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("Yellow")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Koruma Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    



<a:naber:846785563536523282> **m!antiraid** : Bildiğiniz Antiraid

<a:naber:846785563536523282> **m!botizni** : Bildiğimiz Bot Sistemi

<a:naber:846785563536523282> **m!reklamengel** : Sunucunuzdaki Reklamları Engeller

<a:naber:846785563536523282> **m!modlog** : Sunucudaki Herşeyi Oraya Atar Denetim Kaydı Gibi

<a:naber:846785563536523282> **m!capsengel** : Sunucuda Caps Açılmasına İzin Vermez

<a:naber:846785563536523282> **m!everengel** : Sunucuda Ever Here Atılmasına İzin Vermez

<a:naber:846785563536523282> **m!kanalkoruma** : Birinin Kanal Açmasına Silmesine İzin Vermez

<a:naber:846785563536523282> **m!rolkoruma** : Birinin Rol Açmasına Silmesine İzin Vermez

<a:naber:846785563536523282> **m!güvenlik** : Sunucuya Giren Kullanıcıların Bilgilerini Atar




























`) 
       .setImage("")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=848154194103500830&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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