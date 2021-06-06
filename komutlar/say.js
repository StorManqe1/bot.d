const Discord = require('discord.js');

//#DevTR - xFalcon

//#DevTR - xFalcon
exports.run = async (client, message, args) => {
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice'); //#DevTR - xFalcon
    let count = 0
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size; //#DevTR - xFalcon
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size; //#DevTR - xFalcon
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  devtr_kod = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size //#DevTR - xFalcon
    const devtr  = new Discord.MessageEmbed() //#DevTR - xFalcon
        .setColor("YELLOW") //#DevTR - xFalcon
        .setThumbnail(client.user.avatarURL()) //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon
        .addField(`<a:kelebek5:849710939121123349> **Sunucudaki Toplam Üye Sayısı**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`) //#DevTR - xFalcon
        .addField(`<a:kelebek5:849710939121123349> **Toplam Çevrimiçi Üye Sayısı**`, `**\`\`\`${devtr_kod}\`\`\`**`) //#DevTR - xFalcon
        .addField(`<a:kelebek5:849710939121123349>**Seslideki Üye Sayısı**`,`**\`\`\`${count}\`\`\`**`) //#DevTR - xFalcon
        .addField(`<a:kelebek5:849710939121123349>  **Yazı Kanalları**`, `» **${textChannels}**`) //#DevTR - xFalcon
        .addField(`<a:kelebek5:849710939121123349>  **Ses Kanalları**`, `» **${voiceChannels.size}**`) //#DevTR - xFalcon
        .addField(`<a:kelebek4:849711002236223558> **Kullanıcılar** <a:kelebek4:849711002236223558>`, `<a:kelebek4:849711002236223558> Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n<a:kelebek4:849711002236223558> Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n<a:kelebek4:849711002236223558> Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n<a:kelebek4:849711002236223558> Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n<a:kelebek4:849711002236223558>  Botlar : **${botlar}**`, true) //#DevTR - xFalcon
        .setTitle(`${message.author.tag} - Tarafından Kullanıldı`) //#DevTR - xFalcon
        .setFooter(`Ravex Bot İksdi`, client.user.avatarURL()) //#DevTR - xFalcon
    message.channel.send(devtr); //#DevTR - xFalcon
//#DevTR - xFalcon
//#DevTR - xFalcon
} 
                                                           //#DevTR - xFalcon //#DevTR - xFalcon //#DevTR - xFalcon
//#DevTR - xFalcon

//#DevTR - xFalcon
exports.conf = {
    enabled: true, //#DevTR - xFalcon                               //#DevTR - xFalcon                             //#DevTR - xFalcon           //#DevTR - xFalcon
    guildOnly: false, //#DevTR - xFalcon
    aliases: [], //#DevTR - xFalcon
    permLevel: 0 //#DevTR - xFalcon            //#DevTR - xFalcon                        //#DevTR - xFalcon
}; //#DevTR - xFalcon

//#DevTR - xFalcon

exports.help = {
    name: 'say', //#DevTR - xFalcon
    description: 'Say', //#DevTR - xFalcon
    usage: 'say'//#DevTR - xFalcon
} //#DevTR - xFalcon