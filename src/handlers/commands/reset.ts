import type {
  DiscordCommandInteraction,
} from "../../discord";
import type {
  Command,
} from "../../types/";

export const command: Command = {
  "name": "reset",
  "description": "Reset your history.",
  "isGlobal": false,
  "isGuild": true,
  "execute": async(interaction: DiscordCommandInteraction): Promise<void> => {
    await interaction.reply("FOO");
  },
};
