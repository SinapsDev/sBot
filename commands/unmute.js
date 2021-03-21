module.exports = {
    name: 'unmute',
    description: 'This is a unmute command, to unmute members',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let mTarget = message.guild.members.cache.get(target.id)
            mTarget.roles.remove(muteRole.id)
            mTarget.roles.add(mainRole.id)
            message.channel.send(`<@${mTarget.user.id}> has been unmuted by ${message.author.username}#${message.author.discriminator}`)
        } else{
            message.reply('You did not mention a **Member** !')
        }
    }
}