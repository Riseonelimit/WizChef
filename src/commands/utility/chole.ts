import { Interaction, SlashCommandBuilder } from "discord.js";
import { SlashCommand } from "../../types";

export default {
    data: new SlashCommandBuilder()
        .setName("chole")
        .setDescription("Replies with Bhature!"),
    async execute(interaction: any) {
        await interaction.reply("Bhature!");
    },
};
