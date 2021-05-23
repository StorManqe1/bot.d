const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()

             .setColor('#fff000')
             .addField(` Çakar Team Yardım <a:xd4:846009795374612511> `, `
             ${prefix}antiraid aç
             ${prefix}capsengel aç
             ${prefix}emojikoruma aç
             ${prefix}everengel aç
             ${prefix}kanalkoruma aç
             ${prefix}küfürengel aç
             ${prefix}modlog #kanal
             ${prefix}reklamengel aç
             ${prefix}rolkoruma aç
             ${prefix}sohbet-aç
             ${prefix}sohbet-kapat 
             ${prefix}sil <1-1000>
             ${prefix}-otorol        
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK