const ids = new Set();
let afk = false;

module.exports = (message, client) => {
  if (message.author.id == "211032990195777537" && message.content == "?afk") {
    afk = !afk;
    message.channel.sent(
      afk ? "You have been set to afk" : "You are not afk anymore"
    );
  }
  if (
    message.channel.type !== "DM" ||
    client.user.id === message.author.id ||
    ids.has(`${message.author.id}`)
  )
    return;

  if (afk) {
    const msg =
      message.author.id == "937841459451793509"
        ? `Hi bb this is an automate message, I am afk right now could be sleeping. I will respond back to you asap or you can call me`
        : "This is an automate message, I am afk right now and if you have any urgent work DO IT YOURSLEF 🙂";
    message.channel.send(msg);
    ids.add(`${message.author.id}`);
    setTimeout(() => {
      ids.delete(`${message.author.id}`);
    }, 60 * 1000);
  }
};
