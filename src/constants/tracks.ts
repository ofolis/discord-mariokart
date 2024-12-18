import {
  CupName,
  TrackCategory,
} from "../enums";
import {
  Track,
} from "../types";

export const tracks: Record<TrackName, Track> = {
  [CupName.MUSHROOM]: {
    "column": 1,
    "isDlc": false,
    "name": "Mushroom Cup",
    "row": 1,
    "tracks": [
      {
        "category": null,
        "cup": CupName.MUSHROOM,
        "name": "Mario Kart Stadium",
      },
      {
        "category": null,
        "cup": CupName.MUSHROOM,
        "name": "Water Park",
      },
      {
        "category": null,
        "cup": CupName.MUSHROOM,
        "name": "Sweet Sweet Canyon",
      },
      {
        "category": null,
        "cup": CupName.MUSHROOM,
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
        "category": null,
        "cup": CupName.FLOWER,
        "name": "Mario Circuit",
      },
      {
        "category": null,
        "cup": CupName.FLOWER,
        "name": "Toad Harbor",
      },
      {
        "category": null,
        "cup": CupName.FLOWER,
        "name": "Twisted Mansion",
      },
      {
        "category": null,
        "cup": CupName.FLOWER,
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
        "category": null,
        "cup": CupName.STAR,
        "name": "Sunshine Airport",
      },
      {
        "category": null,
        "cup": CupName.STAR,
        "name": "Dolphin Shoals",
      },
      {
        "category": null,
        "cup": CupName.STAR,
        "name": "Electrodome",
      },
      {
        "category": null,
        "cup": CupName.STAR,
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
        "category": null,
        "name": "Cloudtop Cruise",
      },
      {
        "category": null,
        "name": "Bone-Dry Dunes",
      },
      {
        "category": null,
        "name": "Bowser's Castle",
      },
      {
        "category": null,
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
        "category": null,
        "name": "Yoshi Circuit",
      },
      {
        "category": null,
        "name": "Excitebike Arena",
      },
      {
        "category": null,
        "name": "Dragon Driftway",
      },
      {
        "category": null,
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
        "category": null,
        "name": "Baby Park",
      },
      {
        "category": null,
        "name": "Cheese Land",
      },
      {
        "category": null,
        "name": "Wild Woods",
      },
      {
        "category": null,
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
        "category": TrackCategory.WII,
        "name": "Moo Moo Meadows",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Mario Circuit",
      },
      {
        "category": TrackCategory.DS,
        "name": "Cheep Cheep Beach",
      },
      {
        "category": TrackCategory.N64,
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
        "category": TrackCategory.GCN,
        "name": "Dry Dry Desert",
      },
      {
        "category": TrackCategory.SNES,
        "name": "Donut Plains 3",
      },
      {
        "category": TrackCategory.N64,
        "name": "Royal Raceway",
      },
      {
        "category": TrackCategory.THREE_DS,
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
        "category": TrackCategory.DS,
        "name": "Wario Stadium",
      },
      {
        "category": TrackCategory.GCN,
        "name": "Sherbet Land",
      },
      {
        "category": TrackCategory.THREE_DS,
        "name": "Music Park",
      },
      {
        "category": TrackCategory.N64,
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
        "category": TrackCategory.DS,
        "name": "Tick-Tock Clock",
      },
      {
        "category": TrackCategory.THREE_DS,
        "name": "Piranha Plant Slide",
      },
      {
        "category": TrackCategory.WII,
        "name": "Grumble Volcano",
      },
      {
        "category": TrackCategory.N64,
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
        "category": TrackCategory.WII,
        "name": "Wario's Gold Mine",
      },
      {
        "category": TrackCategory.SNES,
        "name": "Rainbow Road",
      },
      {
        "category": null,
        "name": "Ice Ice Outpost",
      },
      {
        "category": null,
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
        "category": TrackCategory.THREE_DS,
        "name": "Neo Bowser City",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Ribbon Road",
      },
      {
        "category": null,
        "name": "Super Bell Subway",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "Paris Promenade",
      },
      {
        "category": TrackCategory.THREE_DS,
        "name": "Toad Circuit",
      },
      {
        "category": TrackCategory.N64,
        "name": "Choco Mountain",
      },
      {
        "category": TrackCategory.WII,
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
        "category": TrackCategory.TOUR,
        "name": "Tokyo Blur",
      },
      {
        "category": TrackCategory.DS,
        "name": "Shroom Ridge",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Sky Garden",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "New York Minute",
      },
      {
        "category": TrackCategory.SNES,
        "name": "Mario Circuit 3",
      },
      {
        "category": TrackCategory.N64,
        "name": "Kalimari Desert",
      },
      {
        "category": TrackCategory.DS,
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
        "category": TrackCategory.TOUR,
        "name": "Sydney Spirit",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Snow Land",
      },
      {
        "category": TrackCategory.WII,
        "name": "Mushroom Gorge",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "London Loop",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Boo Lake",
      },
      {
        "category": TrackCategory.THREE_DS,
        "name": "Rock Rock Mountain",
      },
      {
        "category": TrackCategory.WII,
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
        "category": TrackCategory.TOUR,
        "name": "Berlin Byways",
      },
      {
        "category": TrackCategory.DS,
        "name": "Peach Gardens",
      },
      {
        "category": null,
        "name": "Merry Mountain",
      },
      {
        "category": TrackCategory.THREE_DS,
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
        "category": TrackCategory.TOUR,
        "name": "Amsterdam Drift",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Riverside Park",
      },
      {
        "category": TrackCategory.WII,
        "name": "DK Summit",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "Bangkok Rush",
      },
      {
        "category": TrackCategory.DS,
        "name": "Mario Circuit",
      },
      {
        "category": TrackCategory.GCN,
        "name": "Waluigi Stadium",
      },
      {
        "category": TrackCategory.TOUR,
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
        "category": TrackCategory.TOUR,
        "name": "Athens Dash",
      },
      {
        "category": TrackCategory.GCN,
        "name": "Daisy Cruiser",
      },
      {
        "category": TrackCategory.WII,
        "name": "Moonview Highway",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "Los Angeles Laps",
      },
      {
        "category": TrackCategory.GBA,
        "name": "Sunset Wilds",
      },
      {
        "category": TrackCategory.WII,
        "name": "Koopa Cape",
      },
      {
        "category": TrackCategory.TOUR,
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
        "category": TrackCategory.TOUR,
        "name": "Rome Avanti",
      },
      {
        "category": TrackCategory.GCN,
        "name": "DK Mountain",
      },
      {
        "category": TrackCategory.WII,
        "name": "Daisy Circuit",
      },
      {
        "category": null,
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
        "category": TrackCategory.TOUR,
        "name": "Madrid Drive",
      },
      {
        "category": TrackCategory.THREE_DS,
        "name": "Rosalina's Ice World",
      },
      {
        "category": TrackCategory.SNES,
        "name": "Bowser Castle 3",
      },
      {
        "category": TrackCategory.WII,
        "name": "Rainbow Road",
      },
    ],
  },
};
