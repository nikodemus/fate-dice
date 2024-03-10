import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";

import * as galaxyPreviews from "../previews/galaxy";
import * as gemstonePreviews from "../previews/gemstone";
import * as glassPreviews from "../previews/glass";
import * as ironPreviews from "../previews/iron";
import * as nebulaPreviews from "../previews/nebula";
import * as sunrisePreviews from "../previews/sunrise";
import * as sunsetPreviews from "../previews/sunset";
import * as walnutPreviews from "../previews/walnut";

import allPreview from "../previews/all.png";

const standardPreviews: Record<DiceStyle, string> = {
  GALAXY: galaxyPreviews.D6,
  GEMSTONE: gemstonePreviews.D6,
  GLASS: glassPreviews.D6,
  IRON: ironPreviews.D6,
  NEBULA: nebulaPreviews.D6,
  SUNRISE: sunrisePreviews.D6,
  SUNSET: sunsetPreviews.D6,
  WALNUT: walnutPreviews.D6,
};

function createStandardSet(style: DiceStyle): DiceSet {
  const id = `${style}_STANDARD`;
  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [
      { id: `${id}_D6`, type: "D6", style },
    ],
    previewImage: standardPreviews[style],
  };
}

const standardSets = [
  createStandardSet("GALAXY"),
//  createStandardSet("GEMSTONE"),
//  createStandardSet("GLASS"),
//  createStandardSet("IRON"),
//  createStandardSet("NEBULA"),
//  createStandardSet("SUNRISE"),
//  createStandardSet("SUNSET"),
//  createStandardSet("WALNUT"),
];

const allSet: DiceSet = {
  id: "all",
  name: "all",
  dice: standardSets.reduce(
    (prev, curr) => [...prev, ...curr.dice],
    [] as Die[]
  ),
  previewImage: allPreview,
};

export const diceSets: DiceSet[] = [...standardSets, allSet];
