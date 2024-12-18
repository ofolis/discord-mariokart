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
    // Determine entity or wild
    const randomCharacter: Character | null = random.die(100) === 1 ? null : characters[randomCharacterKey];
    const randomKart: Kart | null = random.die(100) === 1 ? null : karts[randomKartKey];
    const randomTire: Tire | null = random.die(100) === 1 ? null : tires[randomTireKey];
    const randomGlider: Glider | null = random.die(100) === 1 ? null : gliders[randomGliderKey];
    // Send reply message
    const contentLines: string[] = [
      `**Character:** ${randomCharacter === null ? "WILD 🎉" : `${randomCharacter.name}${randomCharacter.variants === null ? "" : ` (${randomCharacter.variants[Math.floor(randomCharacter.variants.length * Math.random())]})`} \`[${randomCharacter.row.toString()},${randomCharacter.column.toString()}]\``}`,
      `**Kart:** ${randomKart === null ? "WILD 🎉" : randomKart.name}`,
      `**Tires:** ${randomTire === null ? "WILD 🎉" : randomTire.name}`,
      `**Glider:** ${randomGlider === null ? "WILD 🎉" : randomGlider.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
    // Save data
    if (randomCharacter !== null) {
      userState.characters.push(randomCharacterKey);
    }
    if (randomKart !== null) {
      userState.karts.push(randomKartKey);
    }
    if (randomTire !== null) {
      userState.tires.push(randomTireKey);
    }
    if (randomGlider !== null) {
      userState.gliders.push(randomGliderKey);
    }
    IO.saveData(
      interaction.user.id,
      userState,
    );
  },
};
