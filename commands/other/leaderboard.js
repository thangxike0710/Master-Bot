const { MessageEmbed } = require('discord.js');
const { newsAPI } = require('../../config.json');
const { Command } = require('discord.js-commando');
var currencyFormatter = require('currency-formatter'); //For currency
var fs = require('fs'); //FileSystem
const fetch = require('node-fetch');
const db = require('quick.db');

module.exports = class Leaderboard extends Command {
  constructor(client) {
    super(client, {
      name: 'leaderboard',
      aliases: ['leaderboard', 'leaderboard'],
      memberName: 'leaderboard',
      group: 'other',
      description: "Show TOP Leaderboard <3"
    });
  }

  run(message) {
exports.run = async (client, message, args, ops) => {
  var points = new db.table("TOTAL_POINTS");
  points.startsWith(`${message.guild.id}`, {
    sort: '.data'
  }).then(resp => {
    resp.length = 15;

    let title = 'Leaderboards';
    var finalLb = "";
    var i = 0;
    for (i in resp) {
      finalLb += `**${client.users.get(resp[i].ID.split('_')[1]).username}** - \`${resp[i].data}xp\`\n`;
    }

    message.channel.send({
      embed: {
        "description": finalLb,
        "title": title,
        "color": 16777215
      }
    }).then(msg => {
      if (conf[message.guild.id].delete == 'true') {
        msg.delete(conf[message.guild.id].deleteTime);
      }
    });
  });
}
  }
};
