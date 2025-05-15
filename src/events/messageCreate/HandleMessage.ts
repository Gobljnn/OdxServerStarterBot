import type { Client, Message } from "discord.js";
import { shouldSendResponse } from "../../commands/utility/validate";

export default async function handleMessage(client: Client, message: Message) {
    if (!shouldSendResponse(client, message.channelId)) return;
    if (message.author.bot) return;

    if (message.content.toLocaleLowerCase() === "!getuser")
        await message.reply(
            `Hey @${message.author.username}! ${message.channelId} --`,
        );
}
