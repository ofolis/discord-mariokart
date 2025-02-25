import * as discordJs from "discord.js";
import { UserState } from ".";
import { ChannelCommandMessage, Json, Log, Saveable, Utils } from "../core";
import {
  CharacterName,
  GliderName,
  KartName,
  TireName,
  TrackName,
} from "../enums";
import { ChannelStateJson, UserStateJson } from "../types";

export class ChannelState implements Saveable {
  public readonly channelId: string;

  private __usedTracks: TrackName[] = [];

  private __userStates: Record<string, UserState> = {};

  public constructor(messageOrJson: ChannelCommandMessage | Json) {
    if (messageOrJson instanceof ChannelCommandMessage) {
      const message: ChannelCommandMessage = messageOrJson;
      this.channelId = message.channelId;
      // Create initial user state
      this.__createUserState(message.user);
    } else {
      const json: Json = messageOrJson;
      this.__usedTracks = Utils.getJsonEntry(json, "usedTracks") as TrackName[];
      this.__userStates = Object.fromEntries(
        Object.entries(
          Utils.getJsonEntry(json, "userStates") as Record<
            string,
            UserStateJson
          >,
        ).map(([userStateId, userStateJson]) => [
          userStateId,
          new UserState(userStateJson),
        ]),
      );
      this.channelId = Utils.getJsonEntry(json, "channelId") as string;
    }
  }

  public getAvailableCharactersForUser(userId: string): CharacterName[] {
    return this.__getAvailableEntitiesForUser(
      userId,
      (userState: UserState) => {
        return userState.getAvailableCharacters();
      },
    );
  }

  public getAvailableGlidersForUser(userId: string): GliderName[] {
    return this.__getAvailableEntitiesForUser(
      userId,
      (userState: UserState) => {
        return userState.getAvailableGliders();
      },
    );
  }

  public getAvailableKartsForUser(userId: string): KartName[] {
    return this.__getAvailableEntitiesForUser(
      userId,
      (userState: UserState) => {
        return userState.getAvailableKarts();
      },
    );
  }

  public getAvailableTiresForUser(userId: string): TireName[] {
    return this.__getAvailableEntitiesForUser(
      userId,
      (userState: UserState) => {
        return userState.getAvailableTires();
      },
    );
  }

  public getAvailableTracks(): TrackName[] {
    const availableTracks: TrackName[] = Object.values(TrackName).filter(
      (track: TrackName) => this.__usedTracks.indexOf(track) === -1,
    );
    if (availableTracks.length === 0) {
      this.__usedTracks = [];
      return this.getAvailableTracks(); // Refetch available tracks if all are used
    }
    return availableTracks;
  }

  public logUsedCharacterForUser(
    userId: string,
    character: CharacterName,
  ): void {
    this.__logUsedEntityForUser(
      userId,
      (userState: UserState, character: CharacterName) => {
        userState.logUsedCharacter(character);
      },
      character,
    );
  }

  public logUsedGliderForUser(userId: string, glider: GliderName): void {
    this.__logUsedEntityForUser(
      userId,
      (userState: UserState, glider: GliderName) => {
        userState.logUsedGlider(glider);
      },
      glider,
    );
  }

  public logUsedKartForUser(userId: string, kart: KartName): void {
    this.__logUsedEntityForUser(
      userId,
      (userState: UserState, kart: KartName) => {
        userState.logUsedKart(kart);
      },
      kart,
    );
  }

  public logUsedTireForUser(userId: string, tire: TireName): void {
    this.__logUsedEntityForUser(
      userId,
      (userState: UserState, tire: TireName) => {
        userState.logUsedTire(tire);
      },
      tire,
    );
  }

  public logUsedTrack(track: TrackName): void {
    if (this.__usedTracks.indexOf(track) !== -1) {
      Log.error(
        "Cannot log used track. Track has already been logged in set.",
        {
          track,
          usedTracks: this.__usedTracks,
        },
      );
      return;
    }
    this.__usedTracks.push(track);
  }

  public resetLoggedEntitiesForUser(userId: string): boolean {
    if (!(userId in this.__userStates)) {
      return false;
    }
    this.__userStates[userId].resetLoggedEntities();
    return true;
  }

  public resetLoggedTracks(): void {
    this.__usedTracks = [];
  }

  public toJson(): ChannelStateJson {
    return {
      channelId: this.channelId,
      usedTracks: this.__usedTracks,
      userStates: Object.fromEntries(
        Object.entries(this.__userStates).map(([userStateId, userState]) => [
          userStateId,
          userState.toJson(),
        ]),
      ),
    };
  }

  private __createUserState(userOrPlayer: discordJs.User): void {
    this.__userStates[userOrPlayer.id] = new UserState(userOrPlayer);
  }

  private __getAvailableEntitiesForUser<T>(
    userId: string,
    getAvailableFunc: (userState: UserState) => T[],
  ): T[] {
    if (!(userId in this.__userStates)) {
      Log.error(
        "Cannot get available entities for user. User ID does not exist.",
        { userId },
      );
      return [];
    }
    const userState: UserState = this.__userStates[userId];
    return getAvailableFunc(userState);
  }

  private __logUsedEntityForUser<T>(
    userId: string,
    logUsedFunc: (userState: UserState, entity: T) => void,
    entity: T,
  ): void {
    if (!(userId in this.__userStates)) {
      Log.error("Cannot log used entity for user. User ID does not exist.", {
        userId,
      });
      return;
    }
    const userState: UserState = this.__userStates[userId];
    logUsedFunc(userState, entity);
  }
}
