const Discord = require('discord.js');
const moment = require('moment');
moment.locale('tr');

exports.run = (client, message, args) => {

let mention = message.author;
if(message.mentions.members.first()) mention = message.mentions.members.first().user;
let mentionMember = message.guild.members.cache.get(mention.id);

let slm = {
  web: 'İnternet Tarayıcısı',
  desktop: 'Bilgisayar',
  mobile: 'Mobil'
}
let oyunlar = [];
mention.presence.activities.forEach(slm => {
if(slm.type === 'CUSTOM_STATUS') {
oyunlar.push(`${slm.emoji ? slm.emoji : ''} ${slm.state}`);
} else {
oyunlar.push(`**${slm.name}** ${slm.type.replace('PLAYING', 'oynuyor').replace('STREAMING', 'yayınlıyor').replace('LISTENING', 'dinliyor').replace('WATCHING', 'izliyor')}`)
}});



let rozetler = false;
if(mention.flags.toArray().length <= 0) {
rozetler = false;
} else {
rozetler = true;
};

let mentionFlags = mention.flags.toArray().join(' | ')
.replace('HOUSE_BRAVERY', 'Bravery')  
.replace('HOUSE_BRILLIANCE', 'Brilliance')
.replace('HOUSE_BALANCE', 'Balance')
.replace('VERIFIED_DEVELOPER', '1. Dönemde Doğrulanmış Bot Geliştiricisi')
.replace('DISCORD_EMPLOYEE', 'Discord Çalışanı')
.replace('PARTNERED_SERVER_OWNER', 'Discord Partner')
.replace('HYPESQUAD_EVENTS', 'HypeSquad Events')
.replace('BUGHUNTER_LEVEL_1', 'Bug Avcısı 1. Lvl')
.replace('EARLY_SUPPORTER', 'Erken Destekçi')
.replace('TEAM_USER', 'Takım Üyesi')
.replace('SYSTEM', 'Sistem')
.replace('BUGHUNTER_LEVEL_2', 'Bug Avcısı 2. Lvl')
.replace('VERIFIED_BOT', 'Onaylı Bot');
let sa;
if(mention.bot) {
sa = 'Bilinmiyor.'
} else {
sa = slm[(mention.presence.clientStatus)];
};
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(mention.tag, mention.avatarURL({dynamic: true}))
.setThumbnail(mention.avatarURL({dynamic: true}))
.addField('<:OnaylanmPng:708215766645735526> | **Durum**', mention.presence.status.replace('online', 'Çevrimiçi').replace('idle', 'Boşta').replace('dnd', 'Rahatsız Etmeyin').replace('offline', 'Çevrimdışı'), true)

.addField('<:ListePng:708215766754918512> | **Ad**', mention.username+` (${mention})`, true)

.addField('<:ndirmePng:708215767031742484> | **Katılma Tarihi**', moment(mentionMember.joinedAt).format('D MMMM YYYY'), true)
.addField('<:ndirmePng:708215767031742484> | **Kayıt Tarihi**', moment(mention.createdAt).format('D MMMM YYYY'), true)
.addField('<:aktivite:798084233847373865> | **Aktivite**', oyunlar.join('\n') ? oyunlar.join('\n') : 'Hiç yok.')
.setDescription(mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') ? mentionMember.roles.cache.filter(a => a.name !== '@everyone').map(a => a).join(' ') : 'Hiç yok.')
.addField('<:hypesquad:798078895328722954> | **Rozetler**', `${rozetler ? mentionFlags : 'Hiç yok.'}`)
.addField('<:BelgePng:708215766595534878> | **Kullanıcı Kimliği**', mention.id)
.setFooter(mention.username, mention.avatarURL({dynamic: true}))
.setTimestamp();

message.channel.send(embed);
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
    aliases: ['profil', 'kişibilgi', 'kişi-bilgi'],
  permLevel: 0
};
 
exports.help = {
  name: 'ui'
};