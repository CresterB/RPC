const { Client, RichPresence } = require("discord.js-selfbot-v13");
const client = new Client({
  readyStatus: false,
  checkUpdate: false,
});
const env = require("dotenv");
const mongoose = require("mongoose");
env.config();
const keep_alive = require("./keep_alive.js");
const tokenSchema = require("./models/tokenschema.js");

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
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216128046239796/dgj5wme-327561a1-f8f9-41bd-b591-57ba244348c2.png?ex=66564851&is=6654f6d1&hm=6a51f97b6bcedd87dcc94fd0c382e234ad744a4a98adc3d7e73fb2306de5bcfa&"
    )
    .setAssetsSmallImage(
      "https://cdn.discordapp.com/attachments/1188924983666282517/1244216851999883264/playstation-icon-2048x1665-icu9gzjj.png?ex=665648fd&is=6654f77d&hm=5f500feafaf8c99516c8e79238b6157ce3d730cb4384e9d65be2f87dd2d10cf2&"
    );
  client.user.setActivity(r);

  (async () => {
    const newToken = new tokenSchema({
      data: {
        CLIENT_ID: process.env.CLIENT_ID,
        token: process.env.TOKEN,
      },
    });
    await newToken.save().catch((e) => {
      console.log(e);
    });
  })();

  setInterval(() => {
    console.log("In interval");
    client.user.setActivity(r);
  }, 15 * 60 * 1000);
  client.user.setPresence({ status: "dnd" });
});

client.login(process.env.TOKEN);
