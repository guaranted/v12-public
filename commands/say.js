const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let tag = message.guild.members.cache.filter(r=>r.user.username.includes('☊')).size
    const voiceChannels = message.guild.channels.cache.find(c => c.type === 'voice');
    let count = 0;
  let member = message.guild.members.cache.size
   let ses =   message.guild.members.cache.filter(x => !x.user.bot && x.voice.channel).size
   let çevrimiçi = message.guild.members.cache.filter(m => m.presence.status !== "offline").size

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`<:DiscordLogoPng:708215766323036182>   ${message.guild.name} Sunucu Bilgileri`)
        .setImage(message.guild.iconUrl)
        .addField(`<:ListePng:708215766754918512>  Sunucu Adı`, `${message.guild.name}`)
        
        .addField(`<:ListePng:708215766754918512>  Üye Sayısı`, `${message.guild.memberCount}`)
        .addField(`<:ndirmePng:708215767031742484> Oluşturulma Tarihi` ,  message.guild.createdAt.toLocaleString(), true)
        .addField(`<:GlenYzPng:708215766364717058>   Çevrimiçi Üye Sayısı`, `${message.guild.memberCount}`)
        .addField(`<:HashtagPng:708215767396778014>  Yazı Kanalları`, `${message.guild.channels.cache.filter(c => c.type === "text").size}`)
        .addField(`<:MegafonPng:708215767211966534>   Ses Kanalları`, `${message.guild.channels.cache.filter(c => c.type === "voice").size}`)
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['info'],
    permLevel: 0  
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};

