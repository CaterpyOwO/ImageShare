module.exports = {
    async execute(bot, msg){
         const Disord = require("discord.js"),
         config = require("../config.json")
         let x = new Disord.RichEmbed()
         .setColor("#"+(Math.random()*0xFFFFFF<<0).toString(16))
         .addField(`\`${config.prefix}\`help`, "Display this message")
         .addField(`\`${config.prefix}\`img`, `Arguments: image/image link\nUploads image to ${config.host.slice(0, -7)}`)
         .addField("Thanks to:", "Creator: Caterpy#4768\nAvatar Creator: PP#9359")
         .addBlankField()
         .addField("Links:", "Support server: [OwO](https://discord.gg/wGbNwKc)\nInvite: [UwU](https://discordapp.com/api/oauth2/authorize?client_id=587072484856168455&permissions=51200&redirect_uri=http%3A%2F%2Fcaterpy.tk%2FgdmTest&scope=bot)\nGIthub repo: [UwO](https://github.com/CaterpyOwO/ImageShare)")
         .setFooter("Thanks to is-inside.me")

         return msg.channel.send(x)

    }
}