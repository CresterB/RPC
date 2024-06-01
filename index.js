const { Client, RichPresence } = require("discord.js-selfbot-v13");
const client = new Client({
  readyStatus: false,
  checkUpdate: false,
});
const env = require("dotenv");
env.config();
const keep_alive = require("./keep_alive.js");

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  client.user.bio = "bio from bot";

  const r = new RichPresence()
    .setApplicationId(process.env.CLIENT_ID)
    .setType("PLAYING")
    .setState("Playing on Playstation")
    .setDetails("Beta Tester Edition")
    .setName("Grand Theft Auto VI")
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=665b8e51&is=665a3cd1&hm=e301b2b2616b3cf27722880495589ee4621ceea43c77f53344b6798170e9aa18&"
    )
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=665b8efd&is=665a3d7d&hm=506860a1fbc83cc386d41c4949b0bdb50aef321c32ebca697030e856e226032e&"
    );
  client.user.setActivity(r);

  setInterval(() => {
    console.log("In interval");
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.TOKEN);
