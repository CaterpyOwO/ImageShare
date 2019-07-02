const Discord = require("discord.js"),
child = require("child_process")

const { prefix, token } = require('./config.json');

const bot = new Discord.Client();

let commands = {}

let loadCommands = function() {
        var glob = require('glob');
        glob( './commands/**/*', function( err, files ) {
        files.forEach(file => {
            file1 = file.slice(file.lastIndexOf("/")+1)
            console.log(file1)
            if(file1.includes(".js")){
                commands[file1.slice(0, -3)] = require(`${file}`);
                commands[file1.slice(0, -3)].filedir = file
            }
        })
                console.log("------All Commands Loaded!------");
        });
}

bot.once('ready', () => {
        console.log(`----Logged in as ${bot.user.tag}----`)
        loadCommands()
})

bot.on('message', msg => {
        if (!msg.content.startsWith(prefix) || msg.author.bot) return

        const input_command = msg.content.slice(prefix.length).split(/ +/).shift().toLowerCase()

        if (commands[input_command] === undefined) return

	try {
                msg.content = msg.content.substr(prefix.length+input_command.length).trim()
                commands[input_command].execute(bot, msg)
                return
        } catch (error) {
                console.error(error)
                msg.reply("Error")
                return
        }

})

bot.login(token)