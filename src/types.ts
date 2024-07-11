import {
    Client,
    Collection,
    Interaction,
    SlashCommandBuilder,
} from "discord.js";

export class DiscordClient extends Client {
    commands: Collection<string, SlashCommand>;
}

export interface SlashCommand {
    data: SlashCommandBuilder;
    execute: (interaction: Interaction) => Promise<void>;
}
