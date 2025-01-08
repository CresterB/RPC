module.exports = (c, client, handler) => {
  console.log(`${c.user.username} is ready!`);

  setInterval(() => {
    client.user.setPresence({ status: 'idle' });
    console.log(c.presence.status);
  }, 1000);
};
