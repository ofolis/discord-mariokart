import {
  characters,
  gliders,
  karts,
  tires,
} from "../../constants/index";
import type {
  DiscordCommandInteraction,
} from "../../discord";
import type {
  Character,
  Command,
  Glider,
  Kart,
  Tires,
} from "../../types/";

export const command: Command = {
  "name": "racer",
  "description": "Generate a random racer.",
  "isGlobal": false,
  "isGuild": true,
  "execute": async(interaction: DiscordCommandInteraction): Promise<void> => {
    const randomCharacter: Character = characters[Math.floor(characters.length * Math.random())];
    const randomKart: Kart = karts[Math.floor(karts.length * Math.random())];
    const randomTires: Tires = tires[Math.floor(tires.length * Math.random())];
    const randomGlider: Glider = gliders[Math.floor(gliders.length * Math.random())];
    const contentLines: string[] = [
      `**Character:** ${randomCharacter.name}${randomCharacter.variants === null ? "" : ` (${randomCharacter.variants[Math.floor(randomCharacter.variants.length * Math.random())]})`} \`[${randomCharacter.row},${randomCharacter.column}]\``,
      `**Kart:** ${randomKart.name}`,
      `**Tires:** ${randomTires.name}`,
      `**Glider:** ${randomGlider.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
  },
};
