import mageImage from "/public/assets/mage.png";
import mageFeatures from "@utils/mageFeatures";

import fighterImage from "@assets/fighter.png";
import fighterFeatures from "@utils/fighterFeatures";

import halfCasterImage from "@assets/half-caster.png";
import halfCasterFeatures from "@utils/halfCasterFeatures";

import type { TypesMap } from "../types";

const types: TypesMap = {
    Fighter: {
        image: fighterImage,
        canCast: false,
        features: fighterFeatures
    },
    Hybrid: {
        image: halfCasterImage,
        canCast: true,
        features: halfCasterFeatures
    },
    Mage: {
        image: mageImage,
        canCast: true,
        features: mageFeatures,
    },
};

export default types;
