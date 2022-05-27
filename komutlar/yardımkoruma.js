const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(``)  
.setTitle("Koruma yardım menüsü.")
.setThumbnail("https://media.discordapp.net/attachments/977159991817564240/978361988134633512/png.png?width=630&height=630")
    .setDescription(`Komutları uygulamadan önce doğru düşündüğünüzden emin olun.

 **.antiraid** : Bildiğiniz antiraid, saldırı koruması.

 **.botizni** : Bildiğimiz bot sistemi.

 **.reklamengel** : Sunucunuzdaki reklamları engeller.

 **.modlog** : Sunucudaki herşeyi oraya atar denetim kaydı gibi.

 **.capsengel** : Sunucuda caps açılmasına izin vermez.

 **.everengel** : Sunucuda ever here atılmasına izin vermez.

 **.kanalkoruma** : Birinin kanal açmasına silmesine izin vermez.

 **.rolkoruma** : Birinin rol açmasına silmesine izin vermez.

 **.güvenlik** : Sunucuya giren kullanıcıların bilgilerini atar.




























`) 
       .setImage("")
       .addField(`»  Discordumuz:`, `  [Bot Davet Linki](https://discord.gg/Dd2mWQZQRT) `)//Discord noble rp
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