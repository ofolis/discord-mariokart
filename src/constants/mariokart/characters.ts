import { CharacterName } from "../../enums";
import { Character } from "../../types";

export const characters: Record<CharacterName, Character> = {
  [CharacterName.MARIO]: {
    column: 1,
    name: "Mario",
    row: 1,
    variants: null,
  },
  [CharacterName.LUIGI]: {
    column: 2,
    name: "Luigi",
    row: 1,
    variants: null,
  },
  [CharacterName.PEACH]: {
    column: 3,
    name: "Peach",
    row: 1,
    variants: null,
  },
  [CharacterName.DAISY]: {
    column: 4,
    name: "Daisy",
    row: 1,
    variants: null,
  },
  [CharacterName.ROSALINA]: {
    column: 5,
    name: "Rosalina",
    row: 1,
    variants: null,
  },
  [CharacterName.TANOOKI_MARIO]: {
    column: 6,
    name: "Tanooki Mario",
    row: 1,
    variants: null,
  },
  [CharacterName.CAT_PEACH]: {
    column: 7,
    name: "Cat Peach",
    row: 1,
    variants: null,
  },
  [CharacterName.BIRDO]: {
    column: 8,
    name: "Birdo",
    row: 1,
    variants: [
      "Pink",
      "Light-Blue",
      "Black",
      "Red",
      "Yellow",
      "White",
      "Dark-Blue",
      "Green",
      "Orange",
    ],
  },
  [CharacterName.YOSHI]: {
    column: 1,
    name: "Yoshi",
    row: 2,
    variants: [
      "Green",
      "Light-Blue",
      "Black",
      "Red",
      "Yellow",
      "White",
      "Dark-Blue",
      "Pink",
      "Orange",
    ],
  },
  [CharacterName.TOAD]: {
    column: 2,
    name: "Toad",
    row: 2,
    variants: null,
  },
  [CharacterName.KOOPA_TROOPA]: {
    column: 3,
    name: "Koopa Troopa",
    row: 2,
    variants: null,
  },
  [CharacterName.SHY_GUY]: {
    column: 4,
    name: "Shy Guy",
    row: 2,
    variants: [
      "Red",
      "Light-Blue",
      "Black",
      "Green",
      "Yellow",
      "White",
      "Blue",
      "Pink",
      "Orange",
    ],
  },
  [CharacterName.LAKITU]: {
    column: 5,
    name: "Lakitu",
    row: 2,
    variants: null,
  },
  [CharacterName.TOADETTE]: {
    column: 6,
    name: "Toadette",
    row: 2,
    variants: null,
  },
  [CharacterName.KING_BOO]: {
    column: 7,
    name: "King Boo",
    row: 2,
    variants: null,
  },
  [CharacterName.PETEY_PIRANHA]: {
    column: 8,
    name: "Petey Piranha",
    row: 2,
    variants: null,
  },
  [CharacterName.BABY_MARIO]: {
    column: 1,
    name: "Baby Mario",
    row: 3,
    variants: null,
  },
  [CharacterName.BABY_LUIGI]: {
    column: 2,
    name: "Baby Luigi",
    row: 3,
    variants: null,
  },
  [CharacterName.BABY_PEACH]: {
    column: 3,
    name: "Baby Peach",
    row: 3,
    variants: null,
  },
  [CharacterName.BABY_DAISY]: {
    column: 4,
    name: "Baby Daisy",
    row: 3,
    variants: null,
  },
  [CharacterName.BABY_ROSALINA]: {
    column: 5,
    name: "Baby Rosalina",
    row: 3,
    variants: null,
  },
  [CharacterName.METAL_MARIO]: {
    column: 6,
    name: "Metal Mario",
    row: 3,
    variants: ["Silver", "Gold"],
  },
  [CharacterName.PINK_GOLD_PEACH]: {
    column: 7,
    name: "Pink Gold Peach",
    row: 3,
    variants: null,
  },
  [CharacterName.WIGGLER]: {
    column: 8,
    name: "Wiggler",
    row: 3,
    variants: null,
  },
  [CharacterName.WARIO]: {
    column: 1,
    name: "Wario",
    row: 4,
    variants: null,
  },
  [CharacterName.WALUIGI]: {
    column: 2,
    name: "Waluigi",
    row: 4,
    variants: null,
  },
  [CharacterName.DONKEY_KONG]: {
    column: 3,
    name: "Donkey Kong",
    row: 4,
    variants: null,
  },
  [CharacterName.BOWSER]: {
    column: 4,
    name: "Bowser",
    row: 4,
    variants: null,
  },
  [CharacterName.DRY_BONES]: {
    column: 5,
    name: "Dry Bones",
    row: 4,
    variants: null,
  },
  [CharacterName.BOWSER_JR]: {
    column: 6,
    name: "Bowser Jr.",
    row: 4,
    variants: null,
  },
  [CharacterName.DRY_BOWSER]: {
    column: 7,
    name: "Dry Bowser",
    row: 4,
    variants: null,
  },
  [CharacterName.KAMEK]: {
    column: 8,
    name: "Kamek",
    row: 4,
    variants: null,
  },
  [CharacterName.LEMMY]: {
    column: 1,
    name: "Lemmy",
    row: 5,
    variants: null,
  },
  [CharacterName.LARRY]: {
    column: 2,
    name: "Larry",
    row: 5,
    variants: null,
  },
  [CharacterName.WENDY]: {
    column: 3,
    name: "Wendy",
    row: 5,
    variants: null,
  },
  [CharacterName.LUDWIG]: {
    column: 4,
    name: "Ludwig",
    row: 5,
    variants: null,
  },
  [CharacterName.IGGY]: {
    column: 5,
    name: "Iggy",
    row: 5,
    variants: null,
  },
  [CharacterName.ROY]: {
    column: 6,
    name: "Roy",
    row: 5,
    variants: null,
  },
  [CharacterName.MORTON]: {
    column: 7,
    name: "Morton",
    row: 5,
    variants: null,
  },
  [CharacterName.PEACHETTE]: {
    column: 8,
    name: "Peachette",
    row: 5,
    variants: null,
  },
  [CharacterName.INKLING]: {
    column: 1,
    name: "Inkling",
    row: 6,
    variants: [
      "Orange Hair Girl",
      "Green Hair Girl",
      "Pink Hair Girl",
      "Blue Hair Boy",
      "Purple Hair Boy",
      "Light-Blue Hair Boy",
    ],
  },
  [CharacterName.VILLAGER]: {
    column: 2,
    name: "Villager",
    row: 6,
    variants: ["Boy", "Girl"],
  },
  [CharacterName.ISABELLE]: {
    column: 3,
    name: "Isabelle",
    row: 6,
    variants: null,
  },
  [CharacterName.LINK]: {
    column: 4,
    name: "Link",
    row: 6,
    variants: ["Breath of the Wild", "Ocarina of Time"],
  },
  [CharacterName.DIDDY_KONG]: {
    column: 5,
    name: "Diddy Kong",
    row: 6,
    variants: null,
  },
  [CharacterName.FUNKY_KONG]: {
    column: 6,
    name: "Funky Kong",
    row: 6,
    variants: null,
  },
  [CharacterName.PAULINE]: {
    column: 7,
    name: "Pauline",
    row: 6,
    variants: null,
  },
  [CharacterName.MII]: {
    column: 8,
    name: "Mii",
    row: 6,
    variants: ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9"],
  },
};
