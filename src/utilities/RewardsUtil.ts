import rewards from "@utils/rewards.json";
import effects from "@utils/itemEffects.json";
import type { Character, Reward, ItemEffect } from "../types";

const typedRewards = rewards as Reward[];
const typedEffects = effects as ItemEffect[];

const getCharTier = (char: Character): number => {
    let possibleTier: number;
    if (char.level >= 16) possibleTier = 4;
    else if (char.level >= 12) possibleTier = 3;
    else if (char.level >= 6) possibleTier = 2;
    else possibleTier = 1;
    return Math.ceil(Math.random() * possibleTier);
};

const getRandomReward = (char: Character): Reward => {
    const availableRewards = typedRewards.filter((item) => item.classes.includes(char.type));

    const selectRandomItem = (): Reward => {
        const randomIndex = Math.floor(Math.random() * availableRewards.length);
        return availableRewards[randomIndex];
    };

    const reward = { ...selectRandomItem() };
    reward.effects = [...reward.effects];

    const rewardTier = getCharTier(char);
    reward.tier = rewardTier;

    while (reward.effects.length < rewardTier) {
        const availableEffects = typedEffects.filter((effect) => effect.type === reward.type);

        if (!availableEffects.length) break;

        const randomEffectIndex = Math.floor(Math.random() * availableEffects.length);
        const newEffect = availableEffects[randomEffectIndex];

        const hasEffectAlready = reward.effects.some((effect) => effect.name === newEffect.name);
        if (hasEffectAlready) continue;
        reward.effects.push(newEffect);
    }
    return reward;
};

export default getRandomReward;
