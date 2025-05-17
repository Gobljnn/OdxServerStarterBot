import { SlashCommandBuilder, Client, CommandInteraction } from "discord.js";
import { shouldSendResponse } from "../../utility/validate";


export const data = new SlashCommandBuilder()
.setName("stop-server")
.setDescription("Stops the specified server")
.addStringOption(o =>  
    o.setName("server-name")
    .setDescription("The name of the server to turn off")
    .setChoices({name: 'Valheim', value: 'valheim'}, {name: 'TheForest', value: 'forest'})
    .setRequired(true)
);

export async function execute(client: Client, interaction: CommandInteraction) {
    if (
        !shouldSendResponse(interaction.member!.user.id, interaction.channelId)
    ) {
        await interaction.reply("401: Unauthorized");
    } else {
        const serverId = interaction.options.get('server-name');

        if (serverId === null){
            await interaction.reply(
                `No Server Id provided <@${interaction.member!.user.id}>`,
            );
        } else {
            const serverUrl = `${process.env.APIBASEURL}/stop-server/${serverId?.value}` 
    
            const response = await fetch(serverUrl, {
                method: 'POST'
            })
    
            const reply = await response.text();
    
            await interaction.reply(
                `${reply} <@${interaction.member!.user.id}>`,
            );
        }
    }
}
