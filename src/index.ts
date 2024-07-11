import { Events, REST, Routes } from "discord.js";
import { config } from "dotenv";
import { initiateCommandHandler } from "./handler/commandHandler";
import client from "./lib/connection";
import { commands, registerCommands } from "./register";

config();

client.once(Events.ClientReady, (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

initiateCommandHandler();
registerCommands();

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.react("😔");
});
const rest = new REST().setToken(process.env.BOT_TOKEN || "");

(async () => {
    try {
        await rest.put(
            Routes.applicationCommands(process.env.APPLICATION_ID || ""),
            { body: commands }
        );
    } catch (error) {
        console.error(error);
    }
})();

// Log in to Discord with token
client.login(process.env.BOT_TOKEN);
