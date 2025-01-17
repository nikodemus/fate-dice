import { Die } from "../types/Die";
import { WeightClass } from "../types/WeightClass";

export function getDieWeightClass(die: Die): WeightClass {
  if (die.style === "IRON") {
      return "HEAVY";
  } else {
      return "MEDIUM";
  }
}
