const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("ORANGE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Boruto Eğlence Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    

<a:kelebek4:849711002236223558> **b!fbi** : Fbi Çağırır (ironi)

<a:kelebek4:849711002236223558> **b!saat** : Size Saati Gösterir

<a:kelebek4:849711002236223558> **b!balıktut** : Balık Tutarsınız 

<a:kelebek4:849711002236223558> **b!aduket-çek** : İstediğiniz Kişiye Aduket Çekersiniz

<a:kelebek4:849711002236223558> **b!aşk** : Onla Olan Aşk Oranınızı Ölçer :D

<a:kelebek4:849711002236223558> **b!espri** : Bot Size Espri Yapar

<a:kelebek4:849711002236223558> **b!vine** : Komik Bi Vine Gösterir

<a:kelebek4:849711002236223558> **b!kaçcm** : Kaç Cm OLduğunu Söyler :D

<a:kelebek4:849711002236223558> **b!yazankazanır** : Arkadaşınızla Yazan Kazanır Oynarsınız

<a:kelebek4:849711002236223558> **b!spo @etiket** : İstediğniz Kişinin Spotify Bilgisini Gösterir































`) 
       .setImage("")
       .addField(`»  Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=https://vm.tiktok.com/ZSJmpwYS5/&permissions=8&scope=bot) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
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