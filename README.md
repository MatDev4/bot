![Open Source](https://blog.syloe.com/wp-content/uploads/2018/04/opensource.png)
# Loxina Bot Open-Source
### Créer le compte du bot
![Bot #1](https://i.imgur.com/aAcwaIu.png)
### Coder le bot

```javascript
const Discord = require("discord.js")
const {client, bot} = new Discord.Client({disableEveryone: true})
const Config = require("./config.json")
client.login(Config.token)
```
#### ⚠️Avec la ligne `const Config = require("./config.json")`, il faudra créer un fichier config.json qui va contenir : 
```json
{
    "token": "ICI LE TOKEN DE VOTRE BOT -> discordapp.com/developers/applications/"
}
```
#### ❔ A quoi sert le fichier `config.json` ? 
#### Il sert à mettre les informations privées ou principal dans un autre fichier que le fichier principal, mieux si vous montrez des screens de votre code
