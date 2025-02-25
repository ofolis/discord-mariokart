import { ICONS } from "../constants";
import { DataController } from "../controllers";
import {
  ChannelCommandMessage,
  Command,
  CommandOption,
  Discord,
} from "../core";
import { IconName } from "../enums";
import { ChannelState } from "../saveables";

export class ResetRacers implements Command {
  public readonly description: string = "Resets your racer generation history.";

  public readonly isGlobal: boolean = false;

  public readonly isGuild: boolean = true;

  public readonly isPrivate: boolean = false;

  public readonly name: string = "reset-racers";

  public readonly options: CommandOption[] = [];

  public async execute(message: ChannelCommandMessage): Promise<void> {
    // Load or create channel state
    const channelState: ChannelState | null = DataController.loadChannelState(
      message.channelId,
    );
    if (channelState === null) {
      await message.update({
        content: `${ICONS[IconName.FAILURE]} Cannot reset racers for **${Discord.formatUserNameString(message.user)}**. There is no channel generation data.`,
      });
      return;
    }
    // Attempt to reset racers for the user
    const loggedEntitiesReset: boolean =
      channelState.resetLoggedEntitiesForUser(message.user.id);
    if (loggedEntitiesReset) {
      // Save if changed
      DataController.saveChannelState(channelState);
      await message.update({
        content: `${ICONS[IconName.SUCCESS]} Racers have been reset for **${Discord.formatUserNameString(message.user)}**.`,
      });
    } else {
      await message.update({
        content: `${ICONS[IconName.FAILURE]} Cannot reset racers for **${Discord.formatUserNameString(message.user)}**. They have no generation data.`,
      });
    }
  }
}
