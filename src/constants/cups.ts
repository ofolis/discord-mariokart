import {
  CupName,
  SubCategory,
} from "../enums";
import {
  Cup,
} from "../types";

export const cups: Record<CupName, Cup> = {
  [CupName.MUSHROOM]: {
    "column": 1,
    "isDlc": false,
    "name": "Mushroom Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Mario Kart Stadium",
      },
      {
        "subCategory": null,
        "name": "Water Park",
      },
      {
        "subCategory": null,
        "name": "Sweet Sweet Canyon",
      },
      {
        "subCategory": null,
        "name": "Thwomp Ruins",
      },
    ],
  },
  [CupName.FLOWER]: {
    "column": 2,
    "isDlc": false,
    "name": "Flower Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Mario Circuit",
      },
      {
        "subCategory": null,
        "name": "Toad Harbor",
      },
      {
        "subCategory": null,
        "name": "Twisted Mansion",
      },
      {
        "subCategory": null,
        "name": "Shy Guy Falls",
      },
    ],
  },
  [CupName.STAR]: {
    "column": 3,
    "isDlc": false,
    "name": "Star Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Sunshine Airport",
      },
      {
        "subCategory": null,
        "name": "Dolphin Shoals",
      },
      {
        "subCategory": null,
        "name": "Electrodome",
      },
      {
        "subCategory": null,
        "name": "Mount Wario",
      },
    ],
  },
  [CupName.SPECIAL]: {
    "column": 4,
    "isDlc": false,
    "name": "Special Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Cloudtop Cruise",
      },
      {
        "subCategory": null,
        "name": "Bone-Dry Dunes",
      },
      {
        "subCategory": null,
        "name": "Bowser's Castle",
      },
      {
        "subCategory": null,
        "name": "Rainbow Road",
      },
    ],
  },
  [CupName.EGG]: {
    "column": 5,
    "isDlc": false,
    "name": "Egg Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Yoshi Circuit",
      },
      {
        "subCategory": null,
        "name": "Excitebike Arena",
      },
      {
        "subCategory": null,
        "name": "Dragon Driftway",
      },
      {
        "subCategory": null,
        "name": "Mute City",
      },
    ],
  },
  [CupName.CROSSING]: {
    "column": 6,
    "isDlc": false,
    "name": "Crossing Cup",
    "row": 1,
    "tracks": [
      {
        "subCategory": null,
        "name": "Baby Park",
      },
      {
        "subCategory": null,
        "name": "Cheese Land",
      },
      {
        "subCategory": null,
        "name": "Wild Woods",
      },
      {
        "subCategory": null,
        "name": "Animal Crossing",
      },
    ],
  },
  [CupName.SHELL]: {
    "column": 1,
    "isDlc": false,
    "name": "Shell Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.WII,
        "name": "Moo Moo Meadows",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Mario Circuit",
      },
      {
        "subCategory": SubCategory.DS,
        "name": "Cheep Cheep Beach",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Toad's Turnpike",
      },
    ],
  },
  [CupName.BANANA]: {
    "column": 2,
    "isDlc": false,
    "name": "Banana Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.GCN,
        "name": "Dry Dry Desert",
      },
      {
        "subCategory": SubCategory.SNES,
        "name": "Donut Plains 3",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Royal Raceway",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "DK Jungle",
      },
    ],
  },
  [CupName.LEAF]: {
    "column": 3,
    "isDlc": false,
    "name": "Leaf Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.DS,
        "name": "Wario Stadium",
      },
      {
        "subCategory": SubCategory.GCN,
        "name": "Sherbet Land",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Music Park",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Yoshi Valley",
      },
    ],
  },
  [CupName.LIGHTNING]: {
    "column": 4,
    "isDlc": false,
    "name": "Lightning Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.DS,
        "name": "Tick-Tock Clock",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Piranha Plant Slide",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Grumble Volcano",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Rainbow Road",
      },
    ],
  },
  [CupName.TRIFORCE]: {
    "column": 5,
    "isDlc": false,
    "name": "Triforce Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.WII,
        "name": "Wario's Gold Mine",
      },
      {
        "subCategory": SubCategory.SNES,
        "name": "Rainbow Road",
      },
      {
        "subCategory": null,
        "name": "Ice Ice Outpost",
      },
      {
        "subCategory": null,
        "name": "Hyrule Circuit",
      },
    ],
  },
  [CupName.BELL]: {
    "column": 6,
    "isDlc": false,
    "name": "Bell Cup",
    "row": 2,
    "tracks": [
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Neo Bowser City",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Ribbon Road",
      },
      {
        "subCategory": null,
        "name": "Super Bell Subway",
      },
      {
        "subCategory": null,
        "name": "Big Blue",
      },
    ],
  },
  [CupName.GOLDEN_DASH]: {
    "column": 1,
    "isDlc": false,
    "name": "Golden Dash Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Paris Promenade",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Toad Circuit",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Choco Mountain",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Coconut Mall",
      },
    ],
  },
  [CupName.LUCKY_CAT]: {
    "column": 2,
    "isDlc": false,
    "name": "Lucky Cat Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Tokyo Blur",
      },
      {
        "subCategory": SubCategory.DS,
        "name": "Shroom Ridge",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Sky Garden",
      },
      {
        "subCategory": null,
        "name": "Ninja Hideaway",
      },
    ],
  },
  [CupName.TURNIP]: {
    "column": 3,
    "isDlc": false,
    "name": "Turnip Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "New York Minute",
      },
      {
        "subCategory": SubCategory.SNES,
        "name": "Mario Circuit 3",
      },
      {
        "subCategory": SubCategory.N64,
        "name": "Kalimari Desert",
      },
      {
        "subCategory": SubCategory.DS,
        "name": "Waluigi Pinball",
      },
    ],
  },
  [CupName.PROPELLER]: {
    "column": 4,
    "isDlc": false,
    "name": "Propeller Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Sydney Spirit",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Snow Land",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Mushroom Gorge",
      },
      {
        "subCategory": null,
        "name": "Sky-High Sundae",
      },
    ],
  },
  [CupName.ROCK]: {
    "column": 5,
    "isDlc": false,
    "name": "Rock Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "London Loop",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Boo Lake",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Rock Rock Mountain",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Maple Treeway",
      },
    ],
  },
  [CupName.MOON]: {
    "column": 6,
    "isDlc": false,
    "name": "Moon Cup",
    "row": 3,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Berlin Byways",
      },
      {
        "subCategory": SubCategory.DS,
        "name": "Peach Gardens",
      },
      {
        "subCategory": null,
        "name": "Merry Mountain",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Rainbow Road",
      },
    ],
  },
  [CupName.FRUIT]: {
    "column": 1,
    "isDlc": false,
    "name": "Fruit Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Amsterdam Drift",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Riverside Park",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "DK Summit",
      },
      {
        "subCategory": null,
        "name": "Yoshi's Island",
      },
    ],
  },
  [CupName.BOOMERANG]: {
    "column": 2,
    "isDlc": false,
    "name": "Boomerang Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Bangkok Rush",
      },
      {
        "subCategory": SubCategory.DS,
        "name": "Mario Circuit",
      },
      {
        "subCategory": SubCategory.GCN,
        "name": "Waluigi Stadium",
      },
      {
        "subCategory": SubCategory.TOUR,
        "name": "Singapore Speedway",
      },
    ],
  },
  [CupName.FEATHER]: {
    "column": 3,
    "isDlc": false,
    "name": "Feather Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Athens Dash",
      },
      {
        "subCategory": SubCategory.GCN,
        "name": "Daisy Cruiser",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Moonview Highway",
      },
      {
        "subCategory": null,
        "name": "Squeaky Clean Sprint",
      },
    ],
  },
  [CupName.CHERRY]: {
    "column": 4,
    "isDlc": false,
    "name": "Cherry Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Los Angeles Laps",
      },
      {
        "subCategory": SubCategory.GBA,
        "name": "Sunset Wilds",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Koopa Cape",
      },
      {
        "subCategory": SubCategory.TOUR,
        "name": "Vancouver Velocity",
      },
    ],
  },
  [CupName.ACORN]: {
    "column": 5,
    "isDlc": false,
    "name": "Acorn Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Rome Avanti",
      },
      {
        "subCategory": SubCategory.GCN,
        "name": "DK Mountain",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Daisy Circuit",
      },
      {
        "subCategory": null,
        "name": "Piranha Plant Cove",
      },
    ],
  },
  [CupName.SPINY]: {
    "column": 6,
    "isDlc": false,
    "name": "Spiny Cup",
    "row": 4,
    "tracks": [
      {
        "subCategory": SubCategory.TOUR,
        "name": "Madrid Drive",
      },
      {
        "subCategory": SubCategory.THREE_DS,
        "name": "Rosalina's Ice World",
      },
      {
        "subCategory": SubCategory.SNES,
        "name": "Bowser Castle 3",
      },
      {
        "subCategory": SubCategory.WII,
        "name": "Rainbow Road",
      },
    ],
  },
};
