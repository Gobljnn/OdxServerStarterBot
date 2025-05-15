import type {Client, Message} from "discord.js"
export default async function handleMessage(client: Client, message: Message) {
    if (message.author.bot) return;

    if (message.content.toLocaleLowerCase() === "hello") await message.reply("world!");
}