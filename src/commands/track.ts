import { Random } from "random-js";
import { cups, tracks } from "../../constants";
import { Command, Discord, IO, Utils } from "../../core";
import type { DiscordCommandInteraction } from "../../core/discord";
import { TrackName } from "../../enums";
import type { Cup, Track, UserState } from "../../types";

// TODO: revise this command to be compatible with new template
export class Track implements Command {
  public readonly description = "Generate a random track.";

  public readonly isGlobal = false;

  public readonly isGuild = true;

  public readonly name = "track";

  public async execute(interaction: DiscordCommandInteraction): Promise<void> {
    // Load or create data
    let userState: UserState | null = IO.loadData(interaction.user.id);
    if (userState === null) {
      userState = {
        characters: [],
        karts: [],
        gliders: [],
        tires: [],
        tracks: [],
      };
    }
    // Create random generator
    const random: Random = new Random();
    // Choose track
    const trackNames: TrackName[] = Object.values(TrackName).filter(
      value => typeof value === "number",
    ) as unknown as TrackName[];
    let trackNamePool: TrackName[] = trackNames.filter(
      key => !userState.tracks.includes(key),
    );
    if (trackNamePool.length === 0) {
      userState.tracks = [];
      trackNamePool = trackNames;
    }
    const randomTrackKey: TrackName = random.pick(trackNamePool);
    // Send reply message
    const randomTrack: Track = tracks[randomTrackKey];
    if (!(randomTrack.cup in cups)) {
      throw new Error(
        `Track "${randomTrackKey.toString()}" contained an invalid cup definition.`,
      );
    }
    const randomTrackCup: Cup = cups[randomTrack.cup];
    const contentLines: string[] = [
      `**Cup:** ${randomTrackCup.name} \`[${randomTrackCup.row.toString()},${randomTrackCup.column.toString()}]\``,
      `**Track:** ${randomTrack.name}`,
    ];
    await Discord.sendInteractionResponse(
      interaction,
      Utils.linesToString(contentLines),
      true,
    );
    // Save data
    userState.tracks.push(randomTrackKey);
    IO.saveData(interaction.user.id, userState);
  }
}
