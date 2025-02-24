import { Random } from "random-js";
import { characters, gliders, karts, tires } from "../../constants";
import { Command, Discord, IO, Utils } from "../../core";
import type { DiscordCommandInteraction } from "../../core/discord";
import { CharacterName, GliderName, KartName, TireName } from "../../enums";
import type { Character, Glider, Kart, Tire, UserState } from "../../types";

// TODO: revise this command to be compatible with new template
export class Racer implements Command {
  public readonly description = "Generate a random racer.";

  public readonly isGlobal = false;

  public readonly isGuild = true;

  public readonly name = "racer";

  private static chooseRandomItem<T>(keys: T[], userItems: T[]): T {
    let keyPool: T[] = keys.filter(key => !userItems.includes(key));
    if (keyPool.length === 0) {
      userItems.length = 0; // Reset items
      keyPool = keys;
    }
    return new Random().pick(keyPool);
  }

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
    // Choose character
    const characterKeys: CharacterName[] = Object.values(CharacterName).filter(
      value => typeof value === "number",
    ) as unknown as CharacterName[];
    const randomCharacterKey: CharacterName = RacerCommand.chooseRandomItem(
      characterKeys,
      userState.characters,
    );
    // Choose kart
    const kartKeys: KartName[] = Object.values(KartName).filter(
      value => typeof value === "number",
    ) as unknown as KartName[];
    const randomKartKey: KartName = RacerCommand.chooseRandomItem(
      kartKeys,
      userState.karts,
    );
    // Choose tire
    const tireKeys: TireName[] = Object.values(TireName).filter(
      value => typeof value === "number",
    ) as unknown as TireName[];
    const randomTireKey: TireName = RacerCommand.chooseRandomItem(
      tireKeys,
      userState.tires,
    );
    // Choose glider
    const gliderKeys: GliderName[] = Object.values(GliderName).filter(
      value => typeof value === "number",
    ) as unknown as GliderName[];
    const randomGliderKey: GliderName = RacerCommand.chooseRandomItem(
      gliderKeys,
      userState.gliders,
    );
    // Create random generator
    const random: Random = new Random();
    // Determine entity or wild
    const randomCharacter: Character | null =
      random.die(100) === 1 ? null : characters[randomCharacterKey];
    const randomKart: Kart | null =
      random.die(100) === 1 ? null : karts[randomKartKey];
    const randomTire: Tire | null =
      random.die(100) === 1 ? null : tires[randomTireKey];
    const randomGlider: Glider | null =
      random.die(100) === 1 ? null : gliders[randomGliderKey];
    // Send reply message
    const contentLines: string[] = [
      `**Character:** ${randomCharacter === null ? "WILD 🎉" : `${randomCharacter.name}${randomCharacter.variants === null ? "" : ` (${randomCharacter.variants[Math.floor(randomCharacter.variants.length * Math.random())]})`} \`[${randomCharacter.row.toString()},${randomCharacter.column.toString()}]\``}`,
      `**Kart:** ${randomKart === null ? "WILD 🎉" : randomKart.name}`,
      `**Tires:** ${randomTire === null ? "WILD 🎉" : randomTire.name}`,
      `**Glider:** ${randomGlider === null ? "WILD 🎉" : randomGlider.name}`,
    ];
    await Discord.sendInteractionResponse(
      interaction,
      Utils.linesToString(contentLines),
      true,
    );
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
    IO.saveData(interaction.user.id, userState);
  }
}
