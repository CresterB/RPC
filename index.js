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
      "https://media.discordapp.net/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=665eda11&is=665d8891&hm=aed49e14a7b617415bc06771b5b00501156d2961f25725478f04e5b510d74f89&=&format=webp&quality=lossless"
    )
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=665edabd&is=665d893d&hm=21e3a40b1fa679f50cf49ee10200067463dcc25c9ac3c7ecbe195f4cec914c1b&"
    );
  client.user.setActivity(r);

  setInterval(() => {
    console.log("In interval");
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.TOKEN);
