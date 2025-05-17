import { SlashCommandBuilder, Client, CommandInteraction } from "discord.js";
import { shouldSendResponse } from "../../utility/validate";


export const data = new SlashCommandBuilder()
.setName("server-status")
.setDescription("Check if a specified server is currently on/off")
.addStringOption(o =>  
    o.setName('serverName')
    .setDescription("The name of the server to check the status for")
    .setChoices({name: 'Valheim', value: 'valheim'}, {name: 'TheForest', value: 'forest'})
    .setRequired(true)
);

export async function execute(client: Client, interaction: CommandInteraction) {
    if (
        !shouldSendResponse(interaction.member!.user.id, interaction.channelId)
    ) {
        await interaction.reply("401: Unauthorized");
    } else {
        const serverId = interaction.options.get('serverName');

        if (serverId === null){
            await interaction.reply(
                `No Server Id provided <@${interaction.member!.user.id}>`,
            );
        } else {
            const serverUrl = `${process.env.APIBASEURL}/server-status/${serverId?.value}` 
    
            const response = await fetch(serverUrl, {
                method: 'GET'
            })
    
            const reply = response.text;
    
            await interaction.reply(
                `${reply} <@${interaction.member!.user.id}>`,
            );
        }
    }
}
