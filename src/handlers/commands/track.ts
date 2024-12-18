import {
  Random,
} from "random-js";
import {
  cups,
  tracks,
} from "../../constants/index";
import type {
  DiscordCommandInteraction,
} from "../../discord";
import {
  TrackName,
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
    const trackNames: TrackName[] = Object.values(TrackName).filter(value => typeof value === "number") as unknown as TrackName[];
    let trackNamePool: TrackName[] = trackNames.filter((key) => !userState.tracks.includes(key));
    if (trackNamePool.length === 0) {
      // Reset tracks
      userState.tracks = [
      ];
      trackNamePool = trackNames;
    }
    const randomTrackKey: TrackName = random.pick(trackNamePool);
    // Send reply message
    const randomTrack: Track = tracks[randomTrackKey];
    if (!(randomTrack.cup in cups)) {
      throw new Error(`Track "${randomTrackKey.toString()}" contained an invalid cup definition.`);
    }
    const randomTrackCup: Cup = cups[randomTrack.cup];
    const contentLines: string[] = [
      `**Cup:** ${randomTrackCup.name} \`[${randomTrackCup.row.toString()},${randomTrackCup.column.toString()}]\``,
      `**Track:** ${randomTrack.name}`,
    ];
    await interaction.reply({
      "content": contentLines.join("\n"),
      "ephemeral": true,
    });
    // Save data
    userState.tracks.push(randomTrackKey);
    IO.saveData(
      interaction.user.id,
      userState,
    );
  },
};
