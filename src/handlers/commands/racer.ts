import {
  Random,
} from "random-js";
import {
  characters,
  gliders,
  karts,
  tires,
} from "../../constants/index";
import type {
  DiscordCommandInteraction,
} from "../../discord";
import {
  CharacterName,
  GliderName,
  KartName,
  TireName,
} from "../../enums";
import {
  IO,
} from "../../io";
import type {
  Character,
  Command,
  Glider,
  Kart,
  Tire,
  UserState,
} from "../../types/";

export const command: Command = {
  "name": "racer",
  "description": "Generate a random racer.",
  "isGlobal": false,
  "isGuild": true,
  "execute": async(interaction: DiscordCommandInteraction): Promise<void> => {
    // Load or create data
    let userState: UserState | null = IO.loadData(interaction.user.id) as UserState | null;
    if (userState === null) {
      userState = {
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
    }
    // Create random generator
    const random: Random = new Random();
    // Choose character
    const characterKeys: CharacterName[] = Object.values(CharacterName).filter(value => typeof value === "number") as unknown as CharacterName[];
    let characterKeyPool: CharacterName[] = characterKeys.filter((key) => !userState.characters.includes(key));
    if (characterKeyPool.length === 0) {
      // Reset characters
      userState.characters = [
      ];
      characterKeyPool = characterKeys;
    }
    const randomCharacterKey: CharacterName = random.pick(characterKeyPool);
    // Choose kart
    const kartKeys: KartName[] = Object.values(KartName).filter(value => typeof value === "number") as unknown as KartName[];
    let kartKeyPool: KartName[] = kartKeys.filter((key) => !userState.karts.includes(key));
    if (kartKeyPool.length === 0) {
      // Reset karts
      userState.karts = [
      ];
      kartKeyPool = kartKeys;
    }
    const randomKartKey: KartName = random.pick(kartKeyPool);
    // Choose tire
    const tireKeys: TireName[] = Object.values(TireName).filter(value => typeof value === "number") as unknown as TireName[];
    let tireKeyPool: TireName[] = tireKeys.filter((key) => !userState.tires.includes(key));
    if (tireKeyPool.length === 0) {
      // Reset tires
      userState.tires = [
      ];
      tireKeyPool = tireKeys;
    }
    const randomTireKey: TireName = random.pick(tireKeyPool);
    // Choose glider
    const gliderKeys: GliderName[] = Object.values(GliderName).filter(value => typeof value === "number") as unknown as GliderName[];
    let gliderKeyPool: GliderName[] = gliderKeys.filter((key) => !userState.gliders.includes(key));
    if (gliderKeyPool.length === 0) {
      // Reset gliders
      userState.gliders = [
      ];
      gliderKeyPool = gliderKeys;
    }
    const randomGliderKey: GliderName = random.pick(gliderKeyPool);
    // Send reply message
    const randomCharacter: Character = characters[randomCharacterKey];
    const randomKart: Kart = karts[randomKartKey];
    const randomTire: Tire = tires[randomTireKey];
    const randomGlider: Glider = gliders[randomGliderKey];
    const contentLines: string[] = [
      `**Character:** ${randomCharacter.name}${randomCharacter.variants === null ? "" : ` (${randomCharacter.variants[Math.floor(randomCharacter.variants.length * Math.random())]})`} \`[${randomCharacter.row.toString()},${randomCharacter.column.toString()}]\``,
      `**Kart:** ${randomKart.name}`,
      `**Tires:** ${randomTire.name}`,
      `**Glider:** ${randomGlider.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
    // Save data
    userState.characters.push(randomCharacterKey);
    userState.karts.push(randomKartKey);
    userState.tires.push(randomTireKey);
    userState.gliders.push(randomGliderKey);
    IO.saveData(
      interaction.user.id,
      userState,
    );
  },
};
