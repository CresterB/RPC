const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
  readyStatus: false,
  checkUpdate: false,
});

const env = require('dotenv');
env.config();
const { CommandKit } = require('commandkit');
const path = require('path');
const keep_alive = require('./keep_alive.js');

new CommandKit({
  client,
  eventsPath: path.join(__dirname, 'events'),
  bulkRegister: true,
});

client.login(process.env.TOKEN);
