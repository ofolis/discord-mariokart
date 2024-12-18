import {
  CharacterName,
  CupName,
  GliderName,
  KartName,
  TireName,
} from "../enums";

export type UserState = {
  "characters": CharacterName[];
  "gliders": GliderName[];
  "karts": KartName[];
  "tires": TireName[];
  "tracks": Record<CupName, number[]>;
};
