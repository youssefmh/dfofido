const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '1') {
    msg.reply('WLC to Pvp Royale System');
  }
});

client.login('');




client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number ðŸ‘Œ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});



client.login('');




   client.on('message',function(message) {
  if (message.author.bot) return;
var prefix = "$";
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info :sparkles:
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
	  
client.login('');


client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**Ù…Ù†Ø´Ù† Ø´Ø®Øµ**");
  if(!reason) return message.reply ("**Ø§ÙƒØªØ¨ Ø³Ø¨Ø¨ Ø§Ù„Ø·Ø±Ø¯**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**Ù„Ø§ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø·Ø±Ø¯ Ø´Ø®Øµ Ø§Ø¹Ù„Ù‰ Ù…Ù† Ø±ØªØ¨ØªÙŠ ÙŠØ±Ø¬Ù‡ Ø§Ø¹Ø·Ø§Ø¡ Ø§Ù„Ø¨ÙˆØª Ø±ØªØ¨Ù‡ Ø¹Ø§Ù„ÙŠ**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.login('');

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Ù…Ù†Ø´Ù† Ø´Ø®Øµ**");
  if(!reason) return message.reply ("**Ø§ÙƒØªØ¨ Ø³Ø¨Ø¨ Ø§Ù„Ø·Ø±Ø¯**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**Ù„Ø§ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø·Ø±Ø¯ Ø´Ø®Øµ Ø§Ø¹Ù„Ù‰ Ù…Ù† Ø±ØªØ¨ØªÙŠ ÙŠØ±Ø¬Ù‡ Ø§Ø¹Ø·Ø§Ø¡ Ø§Ù„Ø¨ÙˆØª Ø±ØªØ¨Ù‡ Ø¹Ø§Ù„ÙŠ**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.login('');


client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "cl") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ ØµÙ„Ø§Ø­ÙŠØ§Øª__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__ØªÙ… ØªÙ‚ÙÙŠÙ„ Ø§Ù„Ø´Ø§Øª__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "op") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__Ù„ÙŠØ³ Ù„Ø¯ÙŠÙƒ ØµÙ„Ø§Ø­ÙŠØ§Øª__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__ØªÙ… ÙØªØ­ Ø§Ù„Ø´Ø§Øª__:white_check_mark:**")
              });
    }
       
});

client.login('');

client.on('message', message => {
        if (message.content === "$inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=512937025561690113&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   });
   
   
client.login('NTEyOTM3MDI1NTYxNjkwMTEz.DtAtjQ.WzP_QYCxmDU2qy-b2y8g-JvjGm0');


client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'Twix'));
});

client.login('');



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`ÊÍÊ ÇáÕíÇäÉ`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});


client.login('');

client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`åÐÇ åæ ÔÚÇÑ ÓíÑÝÑ ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("PURPLE")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.login('');

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ãäÔäÊ ÔÎÕ ÇæáÇð**').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ÇáÃÓÊÚãÇá:', '$mute')
      .addField('ÇáÃÓÊÚãÇá:', '$unmute')
      .addField('Êã ãíæÊ:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Êã ÇÚØÇÁ ÇáÚÖæ ãíæÊ**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Êã ÇÚØÇÁ ÇáÚÖæ ãíæÊ ßÊÇÈí**").catch(console.error);
  });
    }
  
  };
  
  });
  
client.login('');

client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === "$unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("** áÇ íæÌÏ áÏíß ÑÊÈå ÇáãíæÊ 'Muted' **").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ãäÔäÊ ÔÎÕ ÇæáÇð**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ÇáÃÓÊÚãÇá:', 'ÇÓßÊ/ÇÍßí')
      .addField('Êã Ýß ÇáãíæÊ Úä:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:white_check_mark: .. Êã Ýß ÇáãíæÊ Úä ÇáÔÎÕ **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: .. Êã Ýß ÇáãíæÊ Úä ÇáÔÎÕ **").catch(console.error);
  });
    }
  
  };
  
  });

client.login('');  

client.on('message', message => { 
	var prefix ="$";
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL) 
    .setColor("#707070")
    .addField(': ÏÎæáß áÏíÓßæÑÏ ÞÈá', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
    .addField(': ÇäÖãÇãß áÓíÑÝÑ ÞÈá', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
    .setFooter(`sliver Bot`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });

client.login('');

client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``áÇÓÊÎÏÇã ÇáÃãÑ ÇßÊÈ åÐå ÇáÃãÑ : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`áÞÏ ÞãÊ ÈÓÍÈ <@${usermentioned}> Çáì ÇáÑæã ÇáÕæÊí ÇáÎÇÕ Èß? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``áÇ ÊÓÊØíÚ ÓÍÈ "+ message.mentions.members.first() +" `íÌÈ Çä íßæä åÐå ÇáÚÖæ Ýí Ñæã ÕæÊí`")
}
} else {
 message.channel.send("**``íÌÈ Çä Êßæä Ýí Ñæã ÕæÊí áßí ÊÞæã ÈÓÍÈ ÇáÚÖæ Ãáíß``**")
}
} else {
message.react("?")
 }}});
 
client.login('');

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`ßá ãä äÚãÉ ÑÈß`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});

client.login('');


client.on('message', message => {
    if(message.content === "$bot") {
        const embed = new Discord.RichEmbed()
    .setTitle('Invite Link')
    .setColor('#000000').setColor('#36393e')
    .addField(':levitate: Users',`${client.users.size}`,true)
    .addField(':earth_africa: Servers',`${client.guilds.size}`,true)
    .addField('Channels',`${client.channels.size}`,true)
    .addField('Username',`${client.user.tag}`,true)
    .addField('My ID',`${client.user.id}`,true)
    .setURL('https://discordapp.com/oauth2/authorize?client_id=496501749926854657&scope=bot&permissions=388160')
    .setFooter(`TG_Pro`)
               message.channel.sendEmbed(embed);
           }
});


client.login('');
