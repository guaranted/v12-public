exports.run = async (client, message, args) => {
  message.channel.send(client.ws.ping)

}
  
  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yazdır'],
  permLevel: 0
}

exports.help = {
  name: 'yaz'
};//