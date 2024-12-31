import rewards from "@utils/rewards";
import effects from "@utils/itemEffects";

const getCharTier = (char) => {
    let possibleTier
    if (char.level >= 16) possibleTier = 4;
    else if (char.level >= 12) possibleTier = 3;
    else if (char.level >= 6) possibleTier = 2;
    else possibleTier = 1;
    return Math.ceil(Math.random() * possibleTier)
};

const getRandomReward = (char) => {
    const availableRewards = rewards.filter((item) => item.classes.includes(char.type));
    // console.info('available rewards:', availableRewards);

    // Extract the tier logic into a separate function
    const selectRandomItem = () => {
        const randomIndex = Math.floor(Math.random() * availableRewards.length);
        return availableRewards[randomIndex];
    };

    const reward = selectRandomItem();

    // console.info('reward:', reward);

    const rewardTier = getCharTier(char)
    reward.tier = rewardTier

    while (reward.effects.length < rewardTier) {
        const availableEffects = effects.filter((effect) => effect.type === reward.type);

        if (!availableEffects.length) break; // No more effects for this type of item

        const randomEffectIndex = Math.floor(Math.random() * availableEffects.length);
        const newEffect = availableEffects[randomEffectIndex];

        const hasEffectAlready = reward.effects.some((effect) => effect.name === newEffect.name)
        if (hasEffectAlready) continue; // Skip adding duplicate effects
        reward.effects.push(newEffect);
    }
    console.log(rewardTier)
    return reward;
};

export default getRandomReward;
