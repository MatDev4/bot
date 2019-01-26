![Open Source](https://blog.syloe.com/wp-content/uploads/2018/04/opensource.png)
# Loxina Bot Open-Source
### Créer le compte du bot
#### Aller sur **[Ce lien](https://discordapp.com/developers/applications)**
![Bot #1](https://i.imgur.com/aAcwaIu.png)
#### Cliquer sur `New Application`
![Bot #2](https://i.imgur.com/1kJGddB.png)
#### Choisissez le nom de votre bot
![Bot #3](https://i.imgur.com/3jBtlK0.png)
#### Cliquer sur Bot puis New Bot puis Yes do it!
![Bot #4](https://i.imgur.com/UO6lo3L.png)
#### Cliquer sur Copy puis aller dans Visual Studio Code et créer un fichier config.json
#### Mettez ce code ci-dessous 
```json
{
    "token":"LE TOKEN A COLLER"
}
```
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
### Mettre un jeu sur le bot et changer son status
