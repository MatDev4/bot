const Discord = require("discord.js")
const client = new Discord.Client({disableEveryone: true})
const Config = require("./config.json")
client.login(Config.token)
client.on("ready" () => {
    client.user.setActivity("ICI LE JEU DU BOT")
    client.user.setStatus("dnd ou idle ou online")
})
client.on("message", message => {
    if(message.content.startsWith("LE PREFIX DE VOTRE BOT"+ "LE NOM DE VOTRE COMMANDE")) {
        ICI LE CODE A EXECUTER LORS QU ON EXECUTE CETTE COMMANDE
    }
})
