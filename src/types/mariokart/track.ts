import {
  SubCategory,
} from "../enums";

export type Track = {
  "subCategory": SubCategory | null;
  "name": string;
};
