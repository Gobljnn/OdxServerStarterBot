import { SlashCommandBuilder, Client, CommandInteraction } from "discord.js";
import { shouldSendResponse } from "../../utility/validate";

export const data = new SlashCommandBuilder()
    .setName("bot-status")
    .setDescription("Returns a value if bot is running.");

export async function execute(client: Client, interaction: CommandInteraction) {
    if (
        !shouldSendResponse(interaction.member!.user.id, interaction.channelId)
    ) {
        await interaction.reply("401: Unauthorized");
    } else {
        await interaction.reply(
            `Bot is online and ready. <@${interaction.member!.user.id}>`,
        );
    }
}
