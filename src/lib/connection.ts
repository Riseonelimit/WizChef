import { Client, GatewayIntentBits } from "discord.js";
import { DiscordClient } from "../types";

const client = <DiscordClient>new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

export default client;
