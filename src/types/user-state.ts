import {
  CharacterName,
  GliderName,
  KartName,
  TireName,
  TrackName,
} from "../enums";

export type UserState = {
  characters: CharacterName[];
  gliders: GliderName[];
  karts: KartName[];
  tires: TireName[];
  tracks: TrackName[];
};
