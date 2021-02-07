const Discord = require('discord.js');
const nn = new Discord.MessageEmbed
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(nn.setImage('https://media.giphy.com/media/Y41ynggo39awUmeg70/giphy.gif').setTitle(`Komut Başarısız`).setThumbnail(message.author.avatarURL({dynamic: true})).setDescription('Bu komutu kullanmak için Yönetici yetkisine sahip olman gerek!')).then(a => a.delete({timeout: 10000}));

const erorrEmbed = new Discord.MessageEmbed().setTitle('Komut Başarısız').setColor('RED');
message.channel.send(erorrEmbed.setTitle('Komut Başarılı')
.setDescription('Sayaç başarıyla kapatıldı.'));
data.delete(`sayaç.kanal.${message.guild.id}`, message.mentions.channels.first());
data.delete(`sayaç.sayı.${message.guild.id}`, args[1]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'sayaç-kapat'
};