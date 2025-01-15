import { CupName, TrackCategory } from "../../enums";

export type Track = {
  category: TrackCategory | null;
  cup: CupName;
  name: string;
};
