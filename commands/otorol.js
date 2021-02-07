const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
  let role = message.mentions.roles.first();
  let channel = message.mentions.channels.first();
  let system = args[0];
  let parameters = ["ayarla", "sıfırla"];
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply(`Bu komutu kullanabilmek için Rolleri Yönet yetkisine sahip olman gerek!`);
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply(`Oops! You should give bot a manage roles perm.`);
  
  if(!system) return message.reply(`Doğru bir seçenek gir. Seçenekler ${parameters}`);
  if (!system.includes(parameters[0]) && !system.includes(parameters[1])) return message.reply(`Lütfen bir seçenek gir.`);

  if (system === parameters[0]) {
    
    if (db.has(`autorole.${message.guild.id}.system`) === true) return message.reply('Bu sunucuda zaten otorol ayarlanmış.');
  
    if (!role) return message.reply(`Lütfen bir rol belirt.`);
    if (!channel) return message.reply(`Lütfen bir kanal belirt.`);
    if(message.guild.members.cache.find(e => e.id == client.user.id).roles.highest.position < role.position || message.guild.members.cache.find(e => e.id == client.user.id) == role.position) {
      message.channel.send(`Bu rolü otorol olarak seçemezsin.`);
      return;
    }
    
    message.channel.send(`Ayarlanan otorol: (<@&${role.id}>), ayarlanan kanal: (<#${channel.id}>)`);
    db.set(`autorole.${message.guild.id}`, {role: role.id, channel: channel.id, system: true})
    
  } else {
    
    if (db.has(`autorole.${message.guild.id}.system`) === false) return message.reply(`Bu sunucuda zaten otorol ayarlanmamış.`)
    
    message.reply(`Ayarlanan otorol başarıyla sıfırlandı`)
    db.delete(`autorole.${message.guild.id}`)
    
  }
  
};

  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
}

exports.help = {
  name: 'otorol'
};//