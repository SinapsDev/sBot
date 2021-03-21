module.exports = {
    name: 'ban',
    description: 'This is a ban command, to ban members',
    execute(message, args){
        const member = message.mentions.users.first()
        if(message.member.permissions.has('BAN_MEMBERS')){
            if (member){
                const mTarget = message.guild.members.cache.get(member.id)
                mTarget.ban()
                if (args[1]){
                    const reason = args.slice(1).join(' ');
                    message.channel.send(`The user **${mTarget}** has been succefully banned by ${message.author.username}#${message.author.discriminator}. **Reason: *${reason}* **`);
                }else {
                    message.channel.send(`The user **${mTarget}** has been succefully banned by ${message.author.username}#${message.author.discriminator}`);
                }
            } else{
                message.reply('You didn\'t mentionned a member !')
            }
        }else {
            message.reply('You do not have permissions to do this !')
        }
    }
}