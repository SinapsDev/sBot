const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs')
const prefix = '/';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for( const file of commandFiles ){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command);
}

client.on('ready', () => {
  console.log(`sBot ready to go !`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase()

  if ( command === 'clear' ){
      client.commands.get('clear').execute(msg, args)
  }
});

client.login('ODA3MjExNDc2MDk1NzI5NzI1.YB0sRQ.8Xng9GBjYlIw7kmuguvBArDhp7E');