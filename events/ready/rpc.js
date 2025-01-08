module.exports = (c, client, handler) => {
  console.log(`${c.user.username} is ready!`);

  setInterval(() => {
    client.user.setPresence({ status: 'idle' })
  },15 * 60 * 1000);
};
