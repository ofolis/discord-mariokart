import {
  Random,
} from "random-js";
import {
  cups,
} from "../../constants/index";
import type {
  DiscordCommandInteraction,
} from "../../discord";
import {
  CupName,
} from "../../enums";
import {
  IO,
} from "../../io";
import type {
  Command,
  Cup,
  Track,
  UserState,
} from "../../types";

export const command: Command = {
  "name": "track",
  "description": "Generate a random track.",
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
    // Choose track
    const trackCombinationPool: [CupName, number][] = Object.values(CupName).flatMap((cupName) =>
      Array.from(
        {
          "length": 4,
        },
        (_, index) => [
          cupName as CupName,
          index,
        ],
      ));
    characterNamePool = characterNamePool.filter((characterName) => !userState.characters.includes(characterName));
    if (characterNamePool.length === 0) {
      // Reset characters
      userState.characters = [
      ];
      characterNamePool = Object.values(CharacterName);
    }
    const randomCharacterName: CharacterName = random.pick(characterNamePool);
    const cupList: Cup[] = Object.values(cups);
    const randomCup: Cup = random.pick(cupList);
    const randomTrack: Track = random.pick(randomCup.tracks);
    const contentLines: string[] = [
      `**Cup:** ${randomCup.name} \`[${randomCup.row.toString()},${randomCup.column.toString()}]\``,
      `**Track:** ${randomTrack.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
  },
};
