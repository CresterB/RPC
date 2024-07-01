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
      "https://media.discordapp.net/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=66846cd1&is=66831b51&hm=9473d33839d746a5e75272fd33013364075bfa4a01eb3f64806d7e71e4a5e27f&=&format=webp&quality=lossless"
    )
    .setAssetsSmallImage(
      "https://media.discordapp.net/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=66846d7d&is=66831bfd&hm=4bda95f8fd2988af05c3449f2ae95c96671e4915e8c03d14748a5d982a0165de&=&format=webp&quality=lossless&width=825&height=671"
    );
  client.user.setActivity(r);

  setInterval(() => {
    console.log("In interval");
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
};
