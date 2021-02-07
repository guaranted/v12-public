const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );

let kullanici = message.mentions.users.first();
let isim = args.slice(1).join(' '); 
let member = message.mentions.members.first();

if(!member) return message.channel.send(
new Discord.MessageEmbed()
.setColor('RED')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('İsmi Değiştirilecek Kişiyi Etiketlemelisin!'))

if(!isim)return message.channel.send(
new Discord.MessageEmbed()
.setColor('RED')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Yeni İsmi Yazmalısın Kişiyi Etiketlemelisin!'))
 
  member.roles.remove('Kayıtsız Rol İd')//kayıtssız rol id
  member.roles.add('Erkek Rolü id')//erkek rolü id
const embed = new Discord.MessageEmbed()

      .setColor('RANDOM')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
      .setDescription(`**ARAMIZA BİR ERKEK ÜYE KATILDI!** \n\n**Aramıza Katılan Kullanıcı:** ${member.user} \n\n**ARAMIZA HOŞ GELDİN GÜZEL İNSAN**`)
client.channels.cache.get('Mesajın Atılacağı Kanal').send(embed)//genel sohbetin id'sini girerseniz daha iyi olur


message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
 return message.channel.send(
 new Discord.MessageEmbed()
    .setColor('RANDOM')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
    .setAuthor('')//botun ismini yada başka birşeyini yazabilirsiniz yada sunucu ismini falan herşeyi yazabilirsiniz
    .setTitle('Kayıt Yapıldı')
    .setDescription(`İsmi Değiştirilen ${member.user} \nYeni İsmi \`${isim}\` \nErkek Rolü Verilen ${member.user}\nVerilen Rol <@&Verilecek Erkek Rolü İdsi>`)
    .setFooter('')//en alttaki açıklama kısmı
)}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "",
  usage: ""
};