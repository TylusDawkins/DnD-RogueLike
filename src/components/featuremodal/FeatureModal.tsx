import { useState, useEffect } from "react"
import "./featuremodal.css"
import type { Feature, Character } from "../../types"
import { formatDescription } from "@utils/formatDescription"

interface FeatureModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    shouldOpenSpellModal?: boolean;
    setShouldOpenSpellModal?: (open: boolean) => void;
    spellModalOpen?: boolean;
    setSpellModalOpen?: (open: boolean) => void;
    addFeature: (feature: Feature) => void;
    classFeatures: Feature[];
    playerLevel: number;
    character: Character;
    setCharacter: (char: Character) => void;
    saveCharacter: () => void;
}

function ClassModal({ isOpen, setIsOpen, shouldOpenSpellModal, setShouldOpenSpellModal, spellModalOpen, setSpellModalOpen, addFeature, classFeatures, playerLevel, character, setCharacter, saveCharacter }: FeatureModalProps) {

    const tier1Features = classFeatures.filter(x => x.tier <= 1)
    const tier2Features = classFeatures.filter(x => x.tier <= 2)
    const tier3Features = classFeatures.filter(x => x.tier <= 3)
    const [featureChoices, setFeatureChoices] = useState<Feature[]>([])

    useEffect(() => {
        getRandomChoices()
    }, [isOpen])

    const closeModal = () => {
        setIsOpen(!isOpen)
        if (shouldOpenSpellModal && setSpellModalOpen) {
            setSpellModalOpen(!spellModalOpen)
            if (setShouldOpenSpellModal) {
                setShouldOpenSpellModal(!shouldOpenSpellModal)
                return
            }
        }
        if (setShouldOpenSpellModal) {
            setShouldOpenSpellModal(!shouldOpenSpellModal)
        }
    }

    const getRandomChoices = () => {
        let availableFeatures: Feature[];
        const choices: Feature[] = [];
        const target = 4;

        if (playerLevel >= 12) {
            availableFeatures = tier3Features;
        } else if (playerLevel >= 6) {
            availableFeatures = tier2Features;
        } else {
            availableFeatures = tier1Features;
        }

        const asi = classFeatures.find((e) => e.name === "Ability Score Improvement");
        if (asi) {
            const asiOwned = character.features.filter((f) => f.name === asi.name).length;
            const underCap = typeof asi.maxStacks !== "number" || asiOwned < asi.maxStacks;
            if (underCap) choices.push(asi);
        }

        const getParentName = (feature: Feature): string | null => {
            const dep = feature.dependency;
            return dep && dep.trim() !== "" ? dep : null;
        };

        const getRoot = (feature: Feature): Feature => {
            const visited = new Set<string>();
            let current = feature;
            while (true) {
                if (visited.has(current.name)) return current;
                visited.add(current.name);
                const parentName = getParentName(current);
                if (!parentName) return current;
                const parent = classFeatures.find((f) => f.name === parentName);
                if (!parent) return current;
                current = parent;
            }
        };

        let maxAttempts = 0;
        while (choices.length < target && maxAttempts < 100) {
            maxAttempts++;

            if (!availableFeatures || availableFeatures.length === 0) {
                alert("[BUG] NO AVAILABLE FEATURES FOR SELECTION");
                throw new Error("No available features for selection.");
            }

            const validCandidates = availableFeatures.filter((feat) => {
                if (feat.name === "Ability Score Improvement") return false;
                const ownedCount = character.features.filter((f) => f.name === feat.name).length;
                const chosenCount = choices.filter((c) => c.name === feat.name).length;
                const totalCount = ownedCount + chosenCount;
                if (!feat.stackable && totalCount > 0) return false;
                if (feat.stackable && typeof feat.maxStacks === "number" && totalCount >= feat.maxStacks) return false;
                const parentName = getParentName(feat);
                const hasDependencyMet = !parentName || character.features.some((f) => f.name === parentName);
                if (!hasDependencyMet) return false;
                return true;
            });

            if (validCandidates.length === 0) break;

            const groups: Record<string, Feature[]> = {};
            for (const feat of validCandidates) {
                const rootName = getRoot(feat).name;
                if (!groups[rootName]) groups[rootName] = [];
                groups[rootName].push(feat);
            }

            const groupKeys = Object.keys(groups);
            const pickedGroupKey = groupKeys[Math.floor(Math.random() * groupKeys.length)];

            const pickedGroup = groups[pickedGroupKey];
            const randoFeature = pickedGroup[Math.floor(Math.random() * pickedGroup.length)];

            choices.push(randoFeature);
        }

        setFeatureChoices(choices);
    };

    const handleClick = (feature: Feature) => {
        addFeature(feature)
        if (feature.cb) {
            feature.cb(character, setCharacter)
        }
        saveCharacter()
        closeModal()
    }

    return isOpen ? (
        <div id="choice-modal">
            {featureChoices.map((feature, i) => {
                const previewLevel = character.features.filter((f) => f.name === feature.name).length + 1;
                return (
                    <div className="choice-modal-content" key={i}>
                        <div className="choice-name" style={{ fontWeight: '700' }}>{feature.name}</div>
                        <div className="choice-desc" style={{ fontSize: ".75em", overflow: "auto" }}>{formatDescription(feature.description, previewLevel)}</div>
                        <div className="choice-tier" style={{ marginTop: '5px' }}> Tier: {feature.tier}</div>
                        <button className="choice-btn" onClick={() => { handleClick(feature) }}>Choose</button>
                    </div>
                )
            })}
        </div>
    ) : null
}

export default ClassModal
