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
const client = new Discord.Client({disableEveryone: true})
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
#### Rendez-vous dans le fichier `index.js` puis editez ce code
```javascript

client.on("ready" () => {
    client.user.setActivity("ICI LE JEU DU BOT")
    client.user.setStatus("dnd ou idle ou online")
})
```
#### Et voilà, le bot à desormais son jeu, il reste plus qu'a le lancer
### Connexion du bot
![Bot #4](https://i.imgur.com/iIIyQu5.png)
#### Faites `cd ` suivi du dossier du bot sur votre pc
#### Une fois que la commande ci-dessus est faites, vous pouvez désormais faire `node index.js` pour lancer le bot
##### ⚠️ Quand vous fermerez cette fenêtre, le bot s'arrêtera, nous verrons prochainement comment le mettre en place sur un vps
### Création de commandes
#### Pour créer des commandes, recopier le code suivant : 
```javascript
client.on("message", message => {
    if(message.content.startsWith("LE PREFIX DE VOTRE BOT"+ "LE NOM DE VOTRE COMMANDE")) {
        ICI LE CODE A EXECUTER LORS QU ON EXECUTE CETTE COMMANDE
    }
})
```
