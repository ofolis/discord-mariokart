import { Command, Discord, IO, Utils } from "../../core";
import type { DiscordCommandInteraction } from "../../core/discord";
import type { UserState } from "../../types";

// TODO: revise this command to be compatible with new template
export class Reset implements Command {
  public readonly description = "Reset your history.";

  public readonly isGlobal = false;

  public readonly isGuild = true;

  public readonly name = "reset";

  public async execute(interaction: DiscordCommandInteraction): Promise<void> {
    // Save empty data
    const userState: UserState = {
      characters: [],
      karts: [],
      gliders: [],
      tires: [],
      tracks: [],
    };
    IO.saveData(interaction.user.id, userState);
    // Send reply message
    const contentLines: string[] = ["Your history has been reset."];
    await Discord.sendInteractionResponse(
      interaction,
      Utils.linesToString(contentLines),
      true,
    );
  }
}
