const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(``)  
.setTitle("Ravex Koruma Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    



<a:gifsould_yildiz:851471613990797333> **!antiraid** : Bildiğiniz Antiraid

<a:gifsould_yildiz:851471613990797333> **!botizni** : Bildiğimiz Bot Sistemi

<a:gifsould_yildiz:851471613990797333> **!reklamengel** : Sunucunuzdaki Reklamları Engeller

<a:gifsould_yildiz:851471613990797333> **!modlog** : Sunucudaki Herşeyi Oraya Atar Denetim Kaydı Gibi

<a:gifsould_yildiz:851471613990797333> **!capsengel** : Sunucuda Caps Açılmasına İzin Vermez

<a:gifsould_yildiz:851471613990797333> **!everengel** : Sunucuda Ever Here Atılmasına İzin Vermez

<a:gifsould_yildiz:851471613990797333> **!kanalkoruma** : Birinin Kanal Açmasına Silmesine İzin Vermez

<a:gifsould_yildiz:851471613990797333> **!rolkoruma** : Birinin Rol Açmasına Silmesine İzin Vermez

<a:gifsould_yildiz:851471613990797333> **!güvenlik** : Sunucuya Giren Kullanıcıların Bilgilerini Atar




























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