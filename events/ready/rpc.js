module.exports = (c, client, handler) => {
  console.log(`${c.user.username} is ready!`);
  client.user.setPresence({ status: 'idle' });
};
