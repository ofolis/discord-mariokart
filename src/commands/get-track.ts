import { CUPS, TRACKS } from "../constants";
import { DataController } from "../controllers";
import {
  ChannelCommandMessage,
  Command,
  CommandOption,
  Environment,
  Utils,
} from "../core";
import { TrackName } from "../enums";
import { ChannelState } from "../saveables";
import { Cup, Track } from "../types";

export class GetTrack implements Command {
  public readonly description: string = "Generate a random track.";

  public readonly isGlobal: boolean = false;

  public readonly isGuild: boolean = true;

  public readonly isPrivate: boolean = false;

  public readonly name: string = "get-track";

  public readonly options: CommandOption[] = [];

  public async execute(message: ChannelCommandMessage): Promise<void> {
    // Load or create channel state
    let channelState: ChannelState | null = DataController.loadChannelState(
      message.channelId,
    );
    if (channelState === null) {
      channelState = new ChannelState(message);
    }
    // Choose track
    const availableTrackNames: TrackName[] = channelState.getAvailableTracks();
    const trackName: TrackName = Environment.random.pick(availableTrackNames);
    const track: Track = TRACKS[trackName];
    const cup: Cup = CUPS[track.cup];
    // Log usage
    channelState.logUsedTrack(trackName);
    // Send message
    await message.update({
      content: Utils.linesToString([
        `**Cup:** ${cup.name} \`[${cup.row.toString()},${cup.column.toString()}]\``,
        `**Track:** ${track.name}`,
      ]),
    });
    // Save channel state
    DataController.saveChannelState(channelState);
  }
}
