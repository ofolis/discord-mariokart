import { ICONS } from "../constants";
import { DataController } from "../controllers";
import { ChannelCommandMessage, Command, CommandOption } from "../core";
import { IconName } from "../enums";
import { ChannelState } from "../saveables";

export class ResetTracks implements Command {
  public readonly description: string =
    "Resets the channel's track generation history.";

  public readonly isGlobal: boolean = false;

  public readonly isGuild: boolean = true;

  public readonly isPrivate: boolean = false;

  public readonly name: string = "reset-tracks";

  public readonly options: CommandOption[] = [];

  public async execute(message: ChannelCommandMessage): Promise<void> {
    // Load or create channel state
    const channelState: ChannelState | null = DataController.loadChannelState(
      message.channelId,
    );
    if (channelState === null) {
      await message.update({
        content: `${ICONS[IconName.FAILURE]} Cannot reset tracks for this channel. There is no generation data.`,
      });
      return;
    }
    // Reset tracks for the channel (save channel state)
    channelState.resetLoggedTracks();
    DataController.saveChannelState(channelState);
    // Send message
    await message.update({
      content: `${ICONS[IconName.SUCCESS]} Tracks have been reset for this channel.`,
    });
  }
}
