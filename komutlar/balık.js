const Discord = require('discord.js');

const client = new Discord.Client();

 exports.run = (client, message) => {

             message.channel.send('Balık tuttun balığı çekiyorsun.').then(message => {

   var botclubbaliklar = ['``Sazan tuttun!`` :fish:' ,'``Köpek balığı tuttun iyi para eder. Sat sat!`` :D' ,'``Uskumru tuttun!`` :fish:' ,'``Mezgit tuttun! Havyarıda var hee`` :) :fish:' ,'``Japon balığı tuttun yemeyi düşünmüyorsun herhalde?``' ,'``Hamsi tuttun!`` :fish:' ,'``Levrek tuttun!`` :fish:' ,'``Hiçbir şey tutamadın maalesef!`` :wastebasket:' ,'``Alabalık tuttun!`` :fish:' ,'``Maalesef balık oltadan kaçtı!`` :wastebasket:' ,'``İstavrit tuttun!`` :fish:'];
      var botclubbalik = botclubbaliklar[Math.floor(Math.random() * botclubbaliklar.length)];
            message.edit(`${botclubbalik}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0
};

exports.help = {
  name: 'balıktut',
  description: 'ravex Balık Komutu',
  usage: 'balıktut'
};