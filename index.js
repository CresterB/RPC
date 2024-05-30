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
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=6658eb51&is=665799d1&hm=a32efbd8ca91be9cbe252651af54d243740b334a6bfbdf4287235d792d811dbb&"
    )
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=6658ebfd&is=66579a7d&hm=366f9274820fd7958eb08edb41d60c4dac0561654ca45b57c5f097e17bc88185&"
    );
  client.user.setActivity(r);

  setInterval(() => {
    console.log("In interval");
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.TOKEN);
