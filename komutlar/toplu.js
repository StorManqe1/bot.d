const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json'); // kendinize göre tanımlayın!

let prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  if(!args[0] && args[0] !== "ver" && args[0] !== "al") return message.channel.send('Yapılacak işlemi belirtmelisin! \n**Doğru Kullanım:** `-toplu-rol ver @rol  \n`<a:yrme:843588417707180032><a:yrme:843588417707180032><a:yrme:843588417707180032><a:yrme:843588417707180032><a:yrme:843588417707180032><a:yrme:843588417707180032><a:yrme:843588417707180032>\n**Geri Almak İçin**:`-toplu-rol al @rol` \n')
  let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rol => rol.name === args.slice(1).join(' '));
  if(args[0] === "ver") {
    if (!rol) return message.channel.send(`Herkese verilecek olan rolü belirtmelisin! \n**Doğru Kullanım:** \`-toplu-rol ver @rol\``)
    await message.guild.members.cache.forEach(u => {
    u.roles.add(rol)
   })
   message.channel.send('Belirtilen rol herkese verildi!')
   return 
  };
  if(args[0] === "al") {
    if (!rol) return message.channel.send(`Herkesten alınacak olan rolü belirtmelisin! \n**Doğru Kullanım:** \`-toplu-rol al @rol\``)
   await message.guild.members.cache.forEach(u => {
    u.roles.remove(rol)
   });
   message.channel.send('Belirtilen rol herkesten alındı!')
   return
  }; 
};
exports.conf = {
    enabled: false,
    guildOnly: true,
    aliases: ['toplurol'],
    permLevel: 0
};
exports.help = {
  name: 'toplu-rol',
  description: 'Belirttiğiniz rolü herkese verir/alır.',
  usage: 'toplu-rol',
  kategori: ''
};