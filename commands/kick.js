module.exports = {
    name: 'kick',
    description: 'This is a kick command, to kick members',
    execute(message, args, client){
        if(message.member.permissions.has('KICK_MEMBERS')){
            const member = message.mentions.users.first()
            if (member){
                const mTarget = message.guild.members.cache.get(member.id)
                mTarget.kick()
                if (args[1]){
                    const reason = args.slice(1).join(' ');
                    message.channel.send(`The user **${mTarget}** has been succefully kicked by ${message.author.username}#${message.author.discriminator}. **Reason: *${reason}* **`);
                }else {
                    message.channel.send(`The user **${mTarget}** has been succefully kicked by ${message.author.username}#${message.author.discriminator}`);
                }
            } else{
                message.reply('You didn\'t mentionned a member !')
            }
        } else{
            message.reply('You do not have permissions to do this !')
        }
    }
}