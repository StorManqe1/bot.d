const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("ORANGE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Eğlence Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    

<a:naber:846785563536523282> **-fbi** : Fbi Çağırır (ironi)

<a:naber:846785563536523282> **-saat** : Size Saati Gösterir

<a:naber:846785563536523282> **-balıktut** : Balık Tutarsınız 

<a:naber:846785563536523282> **-aduket-çek** : İstediğiniz Kişiye Aduket Çekersiniz

<a:naber:846785563536523282> **-aşk** : Onla Olan Aşk Oranınızı Ölçer :D

<a:naber:846785563536523282> **-espri** : Bot Size Espri Yapar

<a:naber:846785563536523282> **-vine** : Komik Bi Vine Gösterir

<a:naber:846785563536523282> **-kaçcm** : Kaç Cm OLduğunu Söyler :D

<a:naber:846785563536523282> **-yazankazanır** : Arkadaşınızla Yazan Kazanır Oynarsınız































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
    aliases: ["e","eyardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'eğlence', 
    description: 'yardım menüsü',
    usage: 'eğlence'
  };