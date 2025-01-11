module.exports = (c, client, handler) => {
  console.log(`${c.user.username} is ready!`);

  setInterval(() => {
    client.user.setPresence({ status: 'idle' })
  },3 * 60 * 1000);
};
