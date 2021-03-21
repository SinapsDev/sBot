const ms = require('ms')
module.exports = {
    name: 'mute',
    description: 'This is a mute command, to mute members',
    execute(message, args){
        const target = message.mentions.users.first();
        if(target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member')
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')

            let mTarget = message.guild.members.cache.get(target.id)

            if(!args[1]){
                mTarget.roles.remove(mainRole.id)
                mTarget.roles.add(muteRole.id)
                message.channel.send(`<@${mTarget.user.id}> has been muted by ${message.author.username}#${message.author.discriminator}`)
                return;
            }

            mTarget.roles.remove(mainRole.id)
            mTarget.roles.add(muteRole.id)
            message.channel.send(`<@${mTarget.user.id}> has been muted by ${message.author.username}#${message.author.discriminator}. **Remaining Time: *${ms(ms(args[1]))}* **`)

            setTimeout(function() {
                mTarget.roles.remove(muteRole.id)
                mTarget.roles.add(mainRole.id)
            }, ms(args[1]))

        } else{
            message.reply('You did not mention a **Member** !')
        }
    }
}