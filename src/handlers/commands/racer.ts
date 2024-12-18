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
  CupName,
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
    let characterNamePool: CharacterName[] = Object.values(CharacterName) as CharacterName[];
    characterNamePool = characterNamePool.filter((characterName) => !userState.characters.includes(characterName));
    if (characterNamePool.length === 0) {
      // Reset characters
      userState.characters = [
      ];
      characterNamePool = Object.values(CharacterName) as CharacterName[];
    }
    const randomCharacterName: CharacterName = random.pick(characterNamePool);
    // Choose kart
    let kartNamePool: KartName[] = Object.values(KartName) as KartName[];
    kartNamePool = kartNamePool.filter((kartName) => !userState.karts.includes(kartName));
    if (kartNamePool.length === 0) {
      // Reset karts
      userState.karts = [
      ];
      kartNamePool = Object.values(KartName) as KartName[];
    }
    const randomKartName: KartName = random.pick(kartNamePool);
    // Choose tire
    let tireNamePool: TireName[] = Object.values(TireName) as TireName[];
    tireNamePool = tireNamePool.filter((tireName) => !userState.tires.includes(tireName));
    if (tireNamePool.length === 0) {
      // Reset tires
      userState.tires = [
      ];
      tireNamePool = Object.values(TireName) as TireName[];
    }
    const randomTireName: TireName = random.pick(tireNamePool);
    // Choose glider
    let gliderNamePool: GliderName[] = Object.values(GliderName) as GliderName[];
    gliderNamePool = gliderNamePool.filter((gliderName) => !userState.gliders.includes(gliderName));
    if (gliderNamePool.length === 0) {
      // Reset gliders
      userState.gliders = [
      ];
      gliderNamePool = Object.values(GliderName) as GliderName[];
    }
    const randomGliderName: GliderName = random.pick(gliderNamePool);
    // Send reply message
    const randomCharacter: Character = characters[randomCharacterName];
    const randomKart: Kart = karts[randomKartName];
    const randomTire: Tire = tires[randomTireName];
    const randomGlider: Glider = gliders[randomGliderName];
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
    userState.characters.push(randomCharacterName);
    userState.karts.push(randomKartName);
    userState.tires.push(randomTireName);
    userState.gliders.push(randomGliderName);
    IO.saveData(
      interaction.user.id,
      userState,
    );
  },
};
