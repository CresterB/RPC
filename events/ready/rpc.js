const { RichPresence } = require("discord.js-selfbot-v13");

module.exports = (c, client, handler) => {
  console.log(`${c.user.username} is ready!`);
  const r = new RichPresence()
    .setApplicationId(process.env.CLIENT_ID)
    .setType("PLAYING")
    .setState("Playing on Playstation")
    .setDetails("Beta Tester Edition")
    .setName("Grand Theft Auto VI")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://media.discordapp.net/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=668ef8d1&is=668da751&hm=6a48d2713e0b22811ea84d622795cb3332617367405681660426f997c2bf0011&=&format=webp&quality=lossless"
    )
    .setAssetsSmallImage(
      "https://media.discordapp.net/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=668ef97d&is=668da7fd&hm=e3bee5bd8f70bf5a9bdb59ceab94ee67aefe3ae1e3be4952ba41260b0e01538e&=&format=webp&quality=lossless&width=431&height=350"
    );
  client.user.setActivity(r);

  setInterval(() => {
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
};
