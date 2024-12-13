import {
  cups,
} from "../../constants/index";
import type {
  DiscordCommandInteraction,
} from "../../discord";
import type {
  Command,
  Cup,
  Track,
} from "../../types";

export const command: Command = {
  "name": "track",
  "description": "Generate a random track.",
  "isGlobal": false,
  "isGuild": true,
  "execute": async(interaction: DiscordCommandInteraction): Promise<void> => {
    const cupList: Cup[] = Object.values(cups);
    const randomCup: Cup = cupList[Math.floor(cupList.length * Math.random())];
    const randomTrack: Track = randomCup.tracks[Math.floor(randomCup.tracks.length * Math.random())];
    const contentLines: string[] = [
      `**Cup:** ${randomCup.name} \`[${randomCup.row},${randomCup.column}]\``,
      `**Track:** ${randomTrack.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
  },
};
