module.exports = {
    async execute(bot, msg){
    const download = require("download"),
    Discord = require("discord.js"),
    child = require("child_process"),
    config = require("../config.json"),
    fs = require("fs"),
    path = require("path")

    let attachments = msg.attachments.map(a => a.url),
    link

    if (attachments[0] == undefined && msg.content == "") return msg.channel.send("Please send a image/link")
    
    if (!msg.content.includes(" ") && msg.content.startsWith("http") && (msg.content.endsWith(".jpg")||msg.content.endsWith(".jpeg")||msg.content.endsWith(".png")||msg.content.endsWith(".gif"))) link = msg.content
    else link = attachments[0]

    async function ran(){
        let res = ''
        let chars = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz1234567890"
        for (let i = 0; i < 7; i++){
            res += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return res
    }

    let fname = `${await ran()}${path.extname(link)}`

    console.log(fname)

    let image = await download(link, `./image/`, {filename: fname})
    
    let curl = child.exec(`curl --header "key: ${config.key}" -X POST -F 'file=@./image/${fname}' ${config.host}`)
    
    curl.stdout.on("data", function(data) {

        let curlout = JSON.parse(data)

        if(curlout.success !== true) return msg.channel.send("Error, Please try again later.")

        let sendit = new Discord.RichEmbed()
        .setColor("#"+(Math.random()*0xFFFFFF<<0).toString(16))
        .addField("Here is a link to your image:", `${curlout.url}`)
        .setFooter("Thanks to is-inside.me")

        fs.unlinkSync(`./image/${fname}`)

        return msg.channel.send(curlout.url, sendit)
    })
        
    
    }
}