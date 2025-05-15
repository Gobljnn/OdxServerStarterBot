import "dotenv/config";
import { Client } from "discord.js";

const client = new Client({
  intents: ["MessageContent"],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is online with tag ${c.user.tag}`);
});

client.on("message", (m) => {
  if (m.content === "ready") {
    m.reply("I am online");
  }
});

client.login(process.env.TOKEN);
