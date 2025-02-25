import { CharacterName, GliderName, KartName, TireName } from "../enums";

export type UserStateJson = {
  readonly id: string;
  readonly usedCharacters: CharacterName[];
  readonly usedGliders: GliderName[];
  readonly usedKarts: KartName[];
  readonly usedTires: TireName[];
};
