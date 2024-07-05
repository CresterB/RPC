const ids = new Set();
let afk = false;

module.exports = (message, client) => {
  if (message.author.id == "211032990195777537" && message.content == "?afk") {
    afk = !afk;
    message.channel.send(
      afk ? "You have been set to afk" : "You are not afk anymore"
    );
  } else if (
    message.author.id == "211032990195777537" &&
    message.content == "?exclude"
  ) {
    message.delete();
    ids.add(`${message.channel.id}`);
  } else if (
    message.author.id == "211032990195777537" &&
    message.content == "?include"
  ) {
    message.delete();
    ids.delete(`${message.channel.id}`);
  }

  if (
    message.channel.type !== "DM" ||
    client.user.id === message.author.id ||
    ids.has(`${message.channel.id}`)
  )
    return;

  if (afk) {
    const msg =
      message.channel.id == "937841459451793509"
        ? `Hi bb this is an automate message, I am afk right now could be sleeping. I will respond back to you asap or you can call me`
        : "This is an automate message, I am afk right now and if you have any urgent work DO IT YOURSELF 🙂";
    message.channel.send(msg);
    ids.add(`${message.channel.id}`);
    setTimeout(() => {
      ids.delete(`${message.channel.id}`);
    }, 60 * 1000);
  }
};
