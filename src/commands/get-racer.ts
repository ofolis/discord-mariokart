import { CHARACTERS, GLIDERS, KARTS, TIRES } from "../constants";
import { DataController } from "../controllers";
import {
  ChannelCommandMessage,
  Command,
  CommandOption,
  Environment,
  Utils,
} from "../core";
import { CharacterName, GliderName, KartName, TireName } from "../enums";
import { ChannelState } from "../saveables";
import { Character, Glider, Kart, Tire } from "../types";

export class GetRacer implements Command {
  public readonly description: string = "Generate a random racer.";

  public readonly isGlobal: boolean = false;

  public readonly isGuild: boolean = true;

  public readonly isPrivate: boolean = false;

  public readonly name: string = "get-racer";

  public readonly options: CommandOption[] = [];

  public async execute(message: ChannelCommandMessage): Promise<void> {
    // Load or create channel state
    let channelState: ChannelState | null = DataController.loadChannelState(
      message.channelId,
    );
    if (channelState === null) {
      channelState = new ChannelState(message);
    }
    // Choose character (wild or entity)
    let character: Character | null = null;
    if (Environment.random.die(100) !== 1) {
      const availableCharacterNames: CharacterName[] =
        channelState.getAvailableCharactersForUser(message.user.id);
      const characterName: CharacterName = Environment.random.pick(
        availableCharacterNames,
      );
      character = CHARACTERS[characterName];
      channelState.logUsedCharacterForUser(message.user.id, characterName);
    }
    // Choose kart (wild or entity)
    let kart: Kart | null = null;
    if (Environment.random.die(100) !== 1) {
      const availableKartNames: KartName[] =
        channelState.getAvailableKartsForUser(message.user.id);
      const kartName: KartName = Environment.random.pick(availableKartNames);
      kart = KARTS[kartName];
      channelState.logUsedKartForUser(message.user.id, kartName);
    }
    // Choose tire (wild or entity)
    let tire: Tire | null = null;
    if (Environment.random.die(100) !== 1) {
      const availableTireNames: TireName[] =
        channelState.getAvailableTiresForUser(message.user.id);
      const tireName: TireName = Environment.random.pick(availableTireNames);
      tire = TIRES[tireName];
      channelState.logUsedTireForUser(message.user.id, tireName);
    }
    // Choose glider (wild or entity)
    let glider: Glider | null = null;
    if (Environment.random.die(100) !== 1) {
      const availableGliderNames: GliderName[] =
        channelState.getAvailableGlidersForUser(message.user.id);
      const gliderName: GliderName =
        Environment.random.pick(availableGliderNames);
      glider = GLIDERS[gliderName];
      channelState.logUsedGliderForUser(message.user.id, gliderName);
    }
    // Send message
    await message.update({
      content: Utils.linesToString([
        `**Character:** ${character === null ? "WILD 🎉" : `${character.name}${character.variants === null ? "" : ` (${character.variants[Math.floor(character.variants.length * Math.random())]})`} \`[${character.row.toString()},${character.column.toString()}]\``}`,
        `**Kart:** ${kart === null ? "WILD 🎉" : kart.name}`,
        `**Tires:** ${tire === null ? "WILD 🎉" : tire.name}`,
        `**Glider:** ${glider === null ? "WILD 🎉" : glider.name}`,
      ]),
    });
    // Save channel state
    DataController.saveChannelState(channelState);
  }
}
