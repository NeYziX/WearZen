const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("-");

bot.on('ready', function() {
  bot.user.setGame("-help | Dev By NeYziX");
  console.log("le bot a démarré"); 
  bot.channels.get('437266788183572531').send("**=======================**");
  bot.channels.get('437266788183572531').send("| LE BOT VIENT DE SE LANCER |");
  bot.channels.get('437266788183572531').send("**=======================**");
});

bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
  if (message.content.startsWith(prefix + "avatar")) {

message.channel.send({embed: {

    title: "Ton avatar",

    image: {

        url: message.author.avatarURL

    },

    color: 15722240

}

    })

}
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        let spliteMessage = message.content.split(' ');
        if(spliteMessage[0] === "-hello") {
            message.channel.send("world!");
            message.author.createDM().then(channel => {
                channel.send('WORLD!');
            }).catch(console.error);
        bot.channels.get('437266788183572531').send("Commande -hello utilisée par : " + message.author.username);
        }
      
        else if(spliteMessage[0] === "-help") {
            message.channel.send("Liste des commandes envoyées en privée.");
            message.author.createDM().then(channel => {
                channel.send('**⇩ Liste des commandes ⇩: \n \n __§help :__ \n Pour afficher la liste les commandes \n \n __§info :__ \n Pour afficher les informations du Discord \n \n __§ping :__ \n pour afficher la latence du bot \n \n __§socialmedia | §sm :__ \n Pour afficher les réseaux sociaux de PastelWorld \n \n __§avatar :__ \n Pour voir un avatar en mode GRAND FORMAT \n \n __§créateur :__ \n Pour afficher le site du créateur** \n \n _© NeYziX | Tous droits réservés_');
            }).catch(console.error);
        bot.channels.get('437266788183572531').send("Commande -help utilisée par : " + message.author.username);
        }             
    }    
});

bot.on('message', message => {
    if (message.content === prefix + "ping"){
        message.channel.sendMessage("Temps de latence avec le serveur : " + `${message.createdTimestamp - Date.now()}` + "MS");  
    }
});      

bot.on('message', message => {

    if (message.content === prefix + "info") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information de Discord :")
        .addField("Nom du Discord :", message.guild.name)        
        .addField("Crée par :", "NeYziX 👑#4255")
        .addField("Tu as rejoint le :", message.member.joinedAt)
        .addField("Utilisateurs sur le Discord :", message.guild.memberCount)
        .addField("ID :", "403989383423721472")
        .setFooter("© NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "site") {
        var embed = new Discord.RichEmbed()
        .setDescription("Pour visiter le site de la WearZen :")
        .addField("Lien :", "Bientôt")
        .setFooter("© NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "sm") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de la WearZen :")
        .addField("YouTube :", "Bientôt")
        .addField("Twitter :", "Bientôt") 
        .addField("SnapChat :", "Bientôt") 
        .addField("Instagram :", "Bientôt") 
        .setFooter("© NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on('message', message => {

    if (message.content === prefix + "socialmedia") {
        var embed = new Discord.RichEmbed()
        .setDescription("Réseaux sociaux de la WearZen :")
        .addField("YouTube :", "Bientôt")
        .addField("Twitter :", "Bientôt") 
        .addField("SnapChat :", "Bientôt") 
        .addField("Instagram :", "Bientôt") 
        .setFooter("© NeYziX | Tous droits réservés.")
        .setColor("0x81DAF5")
    message.channel.sendEmbed(embed)
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member}, bienvenue sur le serveur :wink:`)
});

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`${member} a quitté le serveur. Nous te souhaitons une bonne continuation.`)
});

bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find('name', 'Visiteurs');
    member.addRole(role)
})
