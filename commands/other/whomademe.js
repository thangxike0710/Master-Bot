const { Command } = require('discord.js-commando');

module.exports = class WhoMadeMeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'whomademe',
      aliases: ['bot-maker', 'bot-creator'],
      memberName: 'whomademe',
      group: 'other',
      description: "Replies with the bot creator's name"
    });
  }

  run(message) {
    message.say(
      'Made by @Berus#6238 with :heart: follow me on Facebook https://www.facebook.com/thangxike0710'
    );
  }
};
