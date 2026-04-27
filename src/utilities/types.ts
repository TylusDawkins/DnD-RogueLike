import mageImage from "/public/assets/mage.png";
import fighterImage from "@assets/fighter.png";
import halfCasterImage from "@assets/half-caster.png";

import features from "@utils/features";

import type { TypesMap } from "../types";

const featuresFor = (className: string) =>
    features.filter((f) => f.classes.includes(className));

const types: TypesMap = {
    Fighter: {
        image: fighterImage,
        canCast: false,
        features: featuresFor("Fighter")
    },
    Hybrid: {
        image: halfCasterImage,
        canCast: true,
        features: featuresFor("Hybrid")
    },
    Mage: {
        image: mageImage,
        canCast: true,
        features: featuresFor("Mage"),
    },
};

export default types;
