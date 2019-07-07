module.exports = {
    async execute(bot, msg){
         const Disord = require("discord.js"),
         config = require("../config.json")
         let x = new Disord.RichEmbed()
         .setColor("#"+(Math.random()*0xFFFFFF<<0).toString(16))
         .addField(`\`${config.prefix}\`help`, "Display this message")
         .addField(`\`${config.prefix}\`img/isinside`, `Arguments: image/image link\nUploads image to ${config.host.slice(0, -7)}`)
         .addField(`\`${config.prefix}\`lewd`, `Arguments: image/image link\nUploads image to https://too.lewd.se`)
         .addField("Thanks to:", "Creator: Caterpy#4768\nAvatar Creator: PP#9359")
         .addBlankField()
         .addField("Links:", "Support server: [discord.gg/wGbNwKc](https://discord.gg/wGbNwKc)\nInvite: [discordapp.com](https://discordapp.com/api/oauth2/authorize?client_id=587072484856168455&permissions=51200&scope=bot)\nGithub repo: [github.com](https://github.com/CaterpyOwO/ImageShare)\nLewd.se: https://lewd.se\nIs-inside.me: https://is-inside.me")

         return msg.channel.send(x)

    }
}