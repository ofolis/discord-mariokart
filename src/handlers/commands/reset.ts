import type {
  DiscordCommandInteraction,
} from "../../discord";
import {
  IO,
} from "../../io";
import type {
  Command,
  UserState,
} from "../../types/";

export const command: Command = {
  "name": "reset",
  "description": "Reset your history.",
  "isGlobal": false,
  "isGuild": true,
  "execute": async(interaction: DiscordCommandInteraction): Promise<void> => {
    // Send reply message
    const contentLines: string[] = [
      "Your history has been reset.",
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
    // Save empty data
    const userState: UserState = {
      "characters": [
      ],
      "karts": [
      ],
      "gliders": [
      ],
      "tires": [
      ],
      "tracks": [
      ],
    };
    IO.saveData(
      interaction.user.id,
      userState,
    );
  },
};
