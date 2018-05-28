const config = require('../config.json')

module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("Himiachi Restarting...")
  .setDescription(":wave: Restarting...")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .setColor("GOLD")
  
  let embed = new discord.RichEmbed()
  .setTitle("Himiachi Restarted!")
  .setDescription(":thumbsup: Himiachi Successfully Restarted.")
  .setThumbnail(bot.user.avatarURL)
  .setTimestamp()
  .setColor("GOLD")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.token))
    .catch(err => console.error(You have fucked up.))
    .then(() => message.channel.send({embed: embed}))
  }
  if (config.owners.includes(message.author.id)) {
    restart(message.channel)
  } else {
    message.channel.send("Owner only, you cannot use this command.")
  }
}

module.exports.help = {
  name: "restart"
}
