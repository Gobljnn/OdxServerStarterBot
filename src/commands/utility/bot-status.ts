import { SlashCommandBuilder, Client, CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
.setName("bot-status")
.setDescription("Returns a value if bot is running.");

export async function execute(client: Client, interaction: CommandInteraction){
    await interaction.reply("I am online and receiving commands.")
}