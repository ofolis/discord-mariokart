import { CupName, TrackCategory, TrackName } from "../../enums";
import { Track } from "../../types";

export const TRACKS: Record<TrackName, Track> = {
  [TrackName.MARIO_KART_STADIUM]: {
    category: null,
    cup: CupName.MUSHROOM,
    name: "Mario Kart Stadium",
  },
  [TrackName.WATER_PARK]: {
    category: null,
    cup: CupName.MUSHROOM,
    name: "Water Park",
  },
  [TrackName.SWEET_SWEET_CANYON]: {
    category: null,
    cup: CupName.MUSHROOM,
    name: "Sweet Sweet Canyon",
  },
  [TrackName.THWOMP_RUINS]: {
    category: null,
    cup: CupName.MUSHROOM,
    name: "Thwomp Ruins",
  },
  [TrackName.MARIO_CIRCUIT]: {
    category: null,
    cup: CupName.FLOWER,
    name: "Mario Circuit",
  },
  [TrackName.TOAD_HARBOR]: {
    category: null,
    cup: CupName.FLOWER,
    name: "Toad Harbor",
  },
  [TrackName.TWISTED_MANSION]: {
    category: null,
    cup: CupName.FLOWER,
    name: "Twisted Mansion",
  },
  [TrackName.SHY_GUY_FALLS]: {
    category: null,
    cup: CupName.FLOWER,
    name: "Shy Guy Falls",
  },
  [TrackName.SUNSHINE_AIRPORT]: {
    category: null,
    cup: CupName.STAR,
    name: "Sunshine Airport",
  },
  [TrackName.DOLPHIN_SHOALS]: {
    category: null,
    cup: CupName.STAR,
    name: "Dolphin Shoals",
  },
  [TrackName.ELECTRODOME]: {
    category: null,
    cup: CupName.STAR,
    name: "Electrodome",
  },
  [TrackName.MOUNT_WARIO]: {
    category: null,
    cup: CupName.STAR,
    name: "Mount Wario",
  },
  [TrackName.CLOUDTOP_CRUISE]: {
    category: null,
    cup: CupName.SPECIAL,
    name: "Cloudtop Cruise",
  },
  [TrackName.BONE_DRY_DUNES]: {
    category: null,
    cup: CupName.SPECIAL,
    name: "Bone-Dry Dunes",
  },
  [TrackName.BOWSERS_CASTLE]: {
    category: null,
    cup: CupName.SPECIAL,
    name: "Bowser's Castle",
  },
  [TrackName.RAINBOW_ROAD]: {
    category: null,
    cup: CupName.SPECIAL,
    name: "Rainbow Road",
  },
  [TrackName.YOSHI_CIRCUIT]: {
    category: null,
    cup: CupName.EGG,
    name: "Yoshi Circuit",
  },
  [TrackName.EXCITEBIKE_ARENA]: {
    category: null,
    cup: CupName.EGG,
    name: "Excitebike Arena",
  },
  [TrackName.DRAGON_DRIFTWAY]: {
    category: null,
    cup: CupName.EGG,
    name: "Dragon Driftway",
  },
  [TrackName.MUTE_CITY]: {
    category: null,
    cup: CupName.EGG,
    name: "Mute City",
  },
  [TrackName.BABY_PARK]: {
    category: null,
    cup: CupName.CROSSING,
    name: "Baby Park",
  },
  [TrackName.CHEESE_LAND]: {
    category: null,
    cup: CupName.CROSSING,
    name: "Cheese Land",
  },
  [TrackName.WILD_WOODS]: {
    category: null,
    cup: CupName.CROSSING,
    name: "Wild Woods",
  },
  [TrackName.ANIMAL_CROSSING]: {
    category: null,
    cup: CupName.CROSSING,
    name: "Animal Crossing",
  },
  [TrackName.MOO_MOO_MEADOWS]: {
    category: TrackCategory.WII,
    cup: CupName.SHELL,
    name: "Moo Moo Meadows",
  },
  [TrackName.MARIO_CIRCUIT_GBA]: {
    category: TrackCategory.GBA,
    cup: CupName.SHELL,
    name: "Mario Circuit",
  },
  [TrackName.CHEEP_CHEEP_BEACH]: {
    category: TrackCategory.DS,
    cup: CupName.SHELL,
    name: "Cheep Cheep Beach",
  },
  [TrackName.TOADS_TURNPIKE]: {
    category: TrackCategory.N64,
    cup: CupName.SHELL,
    name: "Toad's Turnpike",
  },
  [TrackName.DRY_DRY_DESERT]: {
    category: TrackCategory.GCN,
    cup: CupName.BANANA,
    name: "Dry Dry Desert",
  },
  [TrackName.DONUT_PLAINS_3]: {
    category: TrackCategory.SNES,
    cup: CupName.BANANA,
    name: "Donut Plains 3",
  },
  [TrackName.ROYAL_RACEWAY]: {
    category: TrackCategory.N64,
    cup: CupName.BANANA,
    name: "Royal Raceway",
  },
  [TrackName.DK_JUNGLE]: {
    category: TrackCategory.THREEDS,
    cup: CupName.BANANA,
    name: "DK Jungle",
  },
  [TrackName.WARIO_STADIUM]: {
    category: TrackCategory.DS,
    cup: CupName.LEAF,
    name: "Wario Stadium",
  },
  [TrackName.SHERBET_LAND]: {
    category: TrackCategory.GCN,
    cup: CupName.LEAF,
    name: "Sherbet Land",
  },
  [TrackName.MUSIC_PARK]: {
    category: TrackCategory.THREEDS,
    cup: CupName.LEAF,
    name: "Music Park",
  },
  [TrackName.YOSHI_VALLEY]: {
    category: TrackCategory.N64,
    cup: CupName.LEAF,
    name: "Yoshi Valley",
  },
  [TrackName.TICK_TOCK_CLOCK]: {
    category: TrackCategory.DS,
    cup: CupName.LIGHTNING,
    name: "Tick-Tock Clock",
  },
  [TrackName.PIRANHA_PLANT_SLIDE]: {
    category: TrackCategory.THREEDS,
    cup: CupName.LIGHTNING,
    name: "Piranha Plant Slide",
  },
  [TrackName.GRUMBLE_VOLCANO]: {
    category: TrackCategory.WII,
    cup: CupName.LIGHTNING,
    name: "Grumble Volcano",
  },
  [TrackName.RAINBOW_ROAD_N64]: {
    category: TrackCategory.N64,
    cup: CupName.LIGHTNING,
    name: "Rainbow Road",
  },
  [TrackName.WARIOS_GOLD_MINE]: {
    category: TrackCategory.WII,
    cup: CupName.TRIFORCE,
    name: "Wario's Gold Mine",
  },
  [TrackName.RAINBOW_ROAD_SNES]: {
    category: TrackCategory.SNES,
    cup: CupName.TRIFORCE,
    name: "Rainbow Road",
  },
  [TrackName.ICE_ICE_OUTPOST]: {
    category: null,
    cup: CupName.TRIFORCE,
    name: "Ice Ice Outpost",
  },
  [TrackName.HYRULE_CIRCUIT]: {
    category: null,
    cup: CupName.TRIFORCE,
    name: "Hyrule Circuit",
  },
  [TrackName.NEO_BOWSER_CITY]: {
    category: TrackCategory.THREEDS,
    cup: CupName.BELL,
    name: "Neo Bowser City",
  },
  [TrackName.RIBBON_ROAD]: {
    category: TrackCategory.GBA,
    cup: CupName.BELL,
    name: "Ribbon Road",
  },
  [TrackName.SUPER_BELL_SUBWAY]: {
    category: null,
    cup: CupName.BELL,
    name: "Super Bell Subway",
  },
  [TrackName.BIG_BLUE]: {
    category: null,
    cup: CupName.BELL,
    name: "Big Blue",
  },
  [TrackName.PARIS_PROMENADE]: {
    category: TrackCategory.TOUR,
    cup: CupName.GOLDEN_DASH,
    name: "Paris Promenade",
  },
  [TrackName.TOAD_CIRCUIT]: {
    category: TrackCategory.THREEDS,
    cup: CupName.GOLDEN_DASH,
    name: "Toad Circuit",
  },
  [TrackName.CHOCO_MOUNTAIN]: {
    category: TrackCategory.N64,
    cup: CupName.GOLDEN_DASH,
    name: "Choco Mountain",
  },
  [TrackName.COCONUT_MALL]: {
    category: TrackCategory.WII,
    cup: CupName.GOLDEN_DASH,
    name: "Coconut Mall",
  },
  [TrackName.TOKYO_BLUR]: {
    category: TrackCategory.TOUR,
    cup: CupName.LUCKY_CAT,
    name: "Tokyo Blur",
  },
  [TrackName.SHROOM_RIDGE]: {
    category: TrackCategory.DS,
    cup: CupName.LUCKY_CAT,
    name: "Shroom Ridge",
  },
  [TrackName.SKY_GARDEN]: {
    category: TrackCategory.GBA,
    cup: CupName.LUCKY_CAT,
    name: "Sky Garden",
  },
  [TrackName.NINJA_HIDEAWAY]: {
    category: null,
    cup: CupName.LUCKY_CAT,
    name: "Ninja Hideaway",
  },
  [TrackName.NEW_YORK_MINUTE]: {
    category: TrackCategory.TOUR,
    cup: CupName.TURNIP,
    name: "New York Minute",
  },
  [TrackName.MARIO_CIRCUIT_3]: {
    category: TrackCategory.SNES,
    cup: CupName.TURNIP,
    name: "Mario Circuit 3",
  },
  [TrackName.KALIMARI_DESERT]: {
    category: TrackCategory.N64,
    cup: CupName.TURNIP,
    name: "Kalimari Desert",
  },
  [TrackName.WALUIGI_PINBALL]: {
    category: TrackCategory.DS,
    cup: CupName.TURNIP,
    name: "Waluigi Pinball",
  },
  [TrackName.SYDNEY_SPIRIT]: {
    category: TrackCategory.TOUR,
    cup: CupName.PROPELLER,
    name: "Sydney Spirit",
  },
  [TrackName.SNOW_LAND]: {
    category: TrackCategory.GBA,
    cup: CupName.PROPELLER,
    name: "Snow Land",
  },
  [TrackName.MUSHROOM_GORGE]: {
    category: TrackCategory.WII,
    cup: CupName.PROPELLER,
    name: "Mushroom Gorge",
  },
  [TrackName.SKY_HIGH_SUNDAE]: {
    category: null,
    cup: CupName.PROPELLER,
    name: "Sky-High Sundae",
  },
  [TrackName.LONDON_LOOP]: {
    category: TrackCategory.TOUR,
    cup: CupName.ROCK,
    name: "London Loop",
  },
  [TrackName.BOO_LAKE]: {
    category: TrackCategory.GBA,
    cup: CupName.ROCK,
    name: "Boo Lake",
  },
  [TrackName.ROCK_ROCK_MOUNTAIN]: {
    category: TrackCategory.THREEDS,
    cup: CupName.ROCK,
    name: "Rock Rock Mountain",
  },
  [TrackName.MAPLE_TREEWAY]: {
    category: TrackCategory.WII,
    cup: CupName.ROCK,
    name: "Maple Treeway",
  },
  [TrackName.BERLIN_BYWAYS]: {
    category: TrackCategory.TOUR,
    cup: CupName.MOON,
    name: "Berlin Byways",
  },
  [TrackName.PEACH_GARDENS]: {
    category: TrackCategory.DS,
    cup: CupName.MOON,
    name: "Peach Gardens",
  },
  [TrackName.MERRY_MOUNTAIN]: {
    category: null,
    cup: CupName.MOON,
    name: "Merry Mountain",
  },
  [TrackName.RAINBOW_ROAD_3DS]: {
    category: TrackCategory.THREEDS,
    cup: CupName.MOON,
    name: "Rainbow Road",
  },
  [TrackName.AMSTERDAM_DRIFT]: {
    category: TrackCategory.TOUR,
    cup: CupName.FRUIT,
    name: "Amsterdam Drift",
  },
  [TrackName.RIVERSIDE_PARK]: {
    category: TrackCategory.GBA,
    cup: CupName.FRUIT,
    name: "Riverside Park",
  },
  [TrackName.DK_SUMMIT]: {
    category: TrackCategory.WII,
    cup: CupName.FRUIT,
    name: "DK Summit",
  },
  [TrackName.YOSHIS_ISLAND]: {
    category: null,
    cup: CupName.FRUIT,
    name: "Yoshi's Island",
  },
  [TrackName.BANGKOK_RUSH]: {
    category: TrackCategory.TOUR,
    cup: CupName.BOOMERANG,
    name: "Bangkok Rush",
  },
  [TrackName.MARIO_CIRCUIT_DS]: {
    category: TrackCategory.DS,
    cup: CupName.BOOMERANG,
    name: "Mario Circuit",
  },
  [TrackName.WALUIGI_STADIUM]: {
    category: TrackCategory.GCN,
    cup: CupName.BOOMERANG,
    name: "Waluigi Stadium",
  },
  [TrackName.SINGAPORE_SPEEDWAY]: {
    category: TrackCategory.TOUR,
    cup: CupName.BOOMERANG,
    name: "Singapore Speedway",
  },
  [TrackName.ATHENS_DASH]: {
    category: TrackCategory.TOUR,
    cup: CupName.FEATHER,
    name: "Athens Dash",
  },
  [TrackName.DAISY_CRUISER]: {
    category: TrackCategory.GCN,
    cup: CupName.FEATHER,
    name: "Daisy Cruiser",
  },
  [TrackName.MOONVIEW_HIGHWAY]: {
    category: TrackCategory.WII,
    cup: CupName.FEATHER,
    name: "Moonview Highway",
  },
  [TrackName.SQUEAKY_CLEAN_SPRINT]: {
    category: null,
    cup: CupName.FEATHER,
    name: "Squeaky Clean Sprint",
  },
  [TrackName.LOS_ANGELES_LAPS]: {
    category: TrackCategory.TOUR,
    cup: CupName.CHERRY,
    name: "Los Angeles Laps",
  },
  [TrackName.SUNSET_WILDS]: {
    category: TrackCategory.GBA,
    cup: CupName.CHERRY,
    name: "Sunset Wilds",
  },
  [TrackName.KOOPA_CAPE]: {
    category: TrackCategory.WII,
    cup: CupName.CHERRY,
    name: "Koopa Cape",
  },
  [TrackName.VANCOUVER_VELOCITY]: {
    category: TrackCategory.TOUR,
    cup: CupName.CHERRY,
    name: "Vancouver Velocity",
  },
  [TrackName.ROME_AVANTI]: {
    category: TrackCategory.TOUR,
    cup: CupName.ACORN,
    name: "Rome Avanti",
  },
  [TrackName.DK_MOUNTAIN]: {
    category: TrackCategory.GCN,
    cup: CupName.ACORN,
    name: "DK Mountain",
  },
  [TrackName.DAISY_CIRCUIT]: {
    category: TrackCategory.WII,
    cup: CupName.ACORN,
    name: "Daisy Circuit",
  },
  [TrackName.PIRANHA_PLANT_COVE]: {
    category: null,
    cup: CupName.ACORN,
    name: "Piranha Plant Cove",
  },
  [TrackName.MADRID_DRIVE]: {
    category: TrackCategory.TOUR,
    cup: CupName.SPINY,
    name: "Madrid Drive",
  },
  [TrackName.ROSALINAS_ICE_WORLD]: {
    category: TrackCategory.THREEDS,
    cup: CupName.SPINY,
    name: "Rosalina's Ice World",
  },
  [TrackName.BOWSER_CASTLE_3]: {
    category: TrackCategory.SNES,
    cup: CupName.SPINY,
    name: "Bowser Castle 3",
  },
  [TrackName.RAINBOW_ROAD_WII]: {
    category: TrackCategory.WII,
    cup: CupName.SPINY,
    name: "Rainbow Road",
  },
};
