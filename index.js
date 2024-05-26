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
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=66544e11&is=6652fc91&hm=327d2676cd8304e9e4aa96fd992b44a2166f7174131d91e1c8146200f3d7c546&"
    )
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=66544ebd&is=6652fd3d&hm=4d6726fc6d591888c60696e53cc93b283802627aec86183c95b6800b3cc8ed68&"
    );
  client.user.setActivity(r);

  setInterval(() => {
    print("In interval");
    client.user.setActivity(r);
  }, 15000);
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.TOKEN);
