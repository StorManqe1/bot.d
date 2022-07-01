const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("PURPLE")
.setAuthor(``)  
.setTitle("Koruma yardım menüsü.")
.setThumbnail("https://images-ext-2.discordapp.net/external/waXqStDTzUTlriW4dC_oG9mdLIthXD_AFZb7rEwhtvg/https/i.pinimg.com/originals/25/79/99/25799939906655b8796193a8f4ba9b3b.gif?width=600&height=450")
    .setDescription(`Komutları uygulamadan önce doğru düşündüğünüzden emin olun.

 **» .antiraid** : Bildiğiniz antiraid, saldırı koruması.

 **» .botizni** : Bildiğimiz bot sistemi.

 **» .reklamengel** : Sunucunuzdaki reklamları engeller.

 **» .modlog** : Sunucudaki herşeyi oraya atar denetim kaydı gibi.

 **» .capsengel** : Sunucuda caps açılmasına izin vermez.

 **» .everengel** : Sunucuda ever here atılmasına izin vermez.

 **» .kanalkoruma** : Birinin kanal açmasına silmesine izin vermez.

 **» .rolkoruma** : Birinin rol açmasına silmesine izin vermez.

 **» .güvenlik** : Sunucuya giren kullanıcıların bilgilerini atar.




























`) 
       .setImage("")
       .addField(`»  Discordumuz:`, `  [ Discord Davetimiz ](https://discord.gg/spcCXSxrew) `)// Discordunuz
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