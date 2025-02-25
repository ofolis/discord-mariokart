import * as discordJs from "discord.js";
import { Json, Log, Saveable, Utils } from "../core";
import { CharacterName, GliderName, KartName, TireName } from "../enums";
import { UserStateJson } from "../types";

export class UserState implements Saveable {
  public readonly id: string;

  private __usedCharacters: CharacterName[] = [];

  private __usedGliders: GliderName[] = [];

  private __usedKarts: KartName[] = [];

  private __usedTires: TireName[] = [];

  public constructor(userOrJson: discordJs.User | Json) {
    if (userOrJson instanceof discordJs.User) {
      const user: discordJs.User = userOrJson;
      this.id = user.id;
    } else {
      const json: Json = userOrJson;
      this.__usedCharacters = Utils.getJsonEntry(
        json,
        "usedCharacters",
      ) as CharacterName[];
      this.__usedGliders = Utils.getJsonEntry(
        json,
        "usedGliders",
      ) as GliderName[];
      this.__usedKarts = Utils.getJsonEntry(json, "usedKarts") as KartName[];
      this.__usedTires = Utils.getJsonEntry(json, "usedTires") as TireName[];
      this.id = Utils.getJsonEntry(json, "id") as string;
    }
  }

  public getAvailableCharacters(): CharacterName[] {
    return this.__getAvailableEntities(
      Object.values(CharacterName),
      this.__usedCharacters,
    );
  }

  public getAvailableGliders(): GliderName[] {
    return this.__getAvailableEntities(
      Object.values(GliderName),
      this.__usedGliders,
    );
  }

  public getAvailableKarts(): KartName[] {
    return this.__getAvailableEntities(
      Object.values(KartName),
      this.__usedKarts,
    );
  }

  public getAvailableTires(): TireName[] {
    return this.__getAvailableEntities(
      Object.values(TireName),
      this.__usedTires,
    );
  }

  public logUsedCharacter(character: CharacterName): void {
    this.__logUsedEntity(character, this.__usedCharacters);
  }

  public logUsedGlider(glider: GliderName): void {
    this.__logUsedEntity(glider, this.__usedGliders);
  }

  public logUsedKart(kart: KartName): void {
    this.__logUsedEntity(kart, this.__usedKarts);
  }

  public logUsedTire(tire: TireName): void {
    this.__logUsedEntity(tire, this.__usedTires);
  }

  public resetLoggedEntities(): void {
    this.__usedCharacters = [];
    this.__usedGliders = [];
    this.__usedKarts = [];
    this.__usedTires = [];
  }

  public toJson(): UserStateJson {
    return {
      id: this.id,
      usedCharacters: this.__usedCharacters,
      usedGliders: this.__usedGliders,
      usedKarts: this.__usedKarts,
      usedTires: this.__usedTires,
    };
  }

  private __getAvailableEntities<T>(entityEnum: T[], usedEntities: T[]): T[] {
    const availableEntities: T[] = Object.values(entityEnum).filter(
      (entity: T) => usedEntities.indexOf(entity) === -1,
    );
    if (availableEntities.length === 0) {
      usedEntities = [];
      return this.__getAvailableEntities(entityEnum, usedEntities); // Refetch available entities if all are used
    }
    return availableEntities;
  }

  private __logUsedEntity<T>(entity: T, usedEntities: T[]): void {
    if (usedEntities.indexOf(entity) !== -1) {
      Log.error(
        "Cannot log used entity. Entity has already been logged in set.",
        {
          entity,
          usedEntities,
        },
      );
      return;
    }
    usedEntities.push(entity);
  }
}
