const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Boruto Koruma Yardım Menüsü")
.setThumbnail("")
    .setDescription(`



    



<:boruto:849713659264368731> **b!antiraid** : Bildiğiniz Antiraid

<:boruto:849713659264368731> **b!botizni** : Bildiğimiz Bot Sistemi

<:boruto:849713659264368731> **b!reklamengel** : Sunucunuzdaki Reklamları Engeller

<:boruto:849713659264368731> **b!modlog** : Sunucudaki Herşeyi Oraya Atar Denetim Kaydı Gibi

<:boruto:849713659264368731> **b!capsengel** : Sunucuda Caps Açılmasına İzin Vermez

<:boruto:849713659264368731> **b!everengel** : Sunucuda Ever Here Atılmasına İzin Vermez

<:boruto:849713659264368731> **b!kanalkoruma** : Birinin Kanal Açmasına Silmesine İzin Vermez

<:boruto:849713659264368731> **b!rolkoruma** : Birinin Rol Açmasına Silmesine İzin Vermez

<:boruto:849713659264368731> **b!güvenlik** : Sunucuya Giren Kullanıcıların Bilgilerini Atar




























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