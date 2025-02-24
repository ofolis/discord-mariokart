import {
  CharacterName,
  GliderName,
  KartName,
  TireName,
  TrackName,
} from "../enums";

export type UserStateJson = {
  readonly id: string;
  readonly nickname: string | null;
  readonly usedCharacters: CharacterName[];
  readonly usedGliders: GliderName[];
  readonly usedKarts: KartName[];
  readonly usedTires: TireName[];
  readonly usedTracks: TrackName[];
};
