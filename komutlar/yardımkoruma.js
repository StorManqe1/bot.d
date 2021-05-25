const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("YELLOW")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Koruma Komutları")
.setThumbnail("")
    .setDescription(`



<a:topares:846775019551588453> **a!antiraid** : Bildiğiniz Antiraid

<a:topares:846775019551588453> **a!botizni** : Bildiğimiz Bot Sistemi

<a:topares:846775019551588453> **a!reklamengel** : Sunucunuzdaki Reklamları Engeller

<a:topares:846775019551588453> **a!modlog** : Sunucudaki Herşeyi Oraya Atar Denetim Kaydı Gibi

<a:topares:846775019551588453> **a!capsengel** : Sunucuda Caps Açılmasına İzin Vermez

<a:topares:846775019551588453> **a!everengel** : Sunucuda Ever Here Atılmasına İzin Vermez

<a:topares:846775019551588453> **a!kanalkoruma** : Birinin Kanal Açmasına Silmesine İzin Vermez

<a:topares:846775019551588453> **a!rolkoruma** : Birinin Rol Açmasına Silmesine İzin Vermez

<a:topares:846775019551588453> **a!güvenlik** : Sunucuya Giren Kullanıcıların Bilgilerini Atar
































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
    aliases: ["k","kyardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'koruma', 
    description: 'yardım menüsü',
    usage: 'koruma'
  };