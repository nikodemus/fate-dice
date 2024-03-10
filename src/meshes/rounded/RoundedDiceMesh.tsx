import React from "react";
import { DiceType } from "../../types/DiceType";

import { D6 } from "./D6";

type Props = JSX.IntrinsicElements["group"] & { diceType: DiceType };

export const RoundedDiceMesh = React.forwardRef<THREE.Group, Props>(
  ({ diceType, ...props }, ref) => {
    switch (diceType) {
      case "D6":
        return <D6 ref={ref} {...props} />;
      default:
        throw Error(`Dice type ${diceType} error: not implemented`);
    }
  }
);
