import { useState, useEffect } from "react"
import "./featuremodal.css"



function ClassModal({ isOpen, setIsOpen, shouldOpenSpellModal, setShouldOpenSpellModal, spellModalOpen, setSpellModalOpen, addFeature, classFeatures, playerLevel, character, setCharacter, saveCharacter }) {

  const tier1Features = classFeatures.filter(x => x.tier <= 1)
  const tier2Features = classFeatures.filter(x => x.tier <= 2)
  const tier3Features = classFeatures.filter(x => x.tier <= 3)
  const [featureChoices, setFeatureChoices] = useState([])

  useEffect(() => {
    getRandomChoices()
    window.character = character
  }, [isOpen])

  const closeModal = () => {
    setIsOpen(!isOpen)
    if (shouldOpenSpellModal) {
      setSpellModalOpen(!spellModalOpen)
      if (setShouldOpenSpellModal) {
        setShouldOpenSpellModal(!shouldOpenSpellModal)
        return
      }
    }
    setShouldOpenSpellModal(!shouldOpenSpellModal)
  }

  const getRandomChoices = () => {
    let availableFeatures;
    let choices = [];
    let target = 4;

    if (playerLevel >= 12) {
      availableFeatures = tier3Features;
    } else if (playerLevel >= 6) {
      availableFeatures = tier2Features;
    } else {
      availableFeatures = tier1Features;
    }

    const asi = classFeatures.find((e) => e.name === "Ability Score Improvement"); // add this as a default incase all options are undesireable
    if (asi) choices.push(asi);

    // Reads either spelling of the dependency field (fighterFeatures uses "dependency", others use "dependancy")
    const getParentName = (feature) => {
      const dep = feature.dependency || feature.dependancy;
      return dep && dep.trim() !== "" ? dep : null;
    };

    // Walks up the chain to the root ancestor (cycle-safe via visited set)
    const getRoot = (feature) => {
      const visited = new Set();
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

    let maxAttempts = 0; // Number of attempts to get valid features
    while (choices.length < target && maxAttempts < 100) { // Limit attempts to avoid infinite loop
      maxAttempts++;

      if (!availableFeatures || availableFeatures.length === 0) {
        alert("[BUG] NO AVAILABLE FEATURES FOR SELECTION");
        throw new Error("No available features for selection.");
      }

      // Filter to only valid candidates for this iteration
      const validCandidates = availableFeatures.filter((feat) => {
        if (feat.name === "Ability Score Improvement") return false;
        const hasChoiceAlready = choices.some((c) => c.name === feat.name);
        const hasFeatureAlready = character.features.some((f) => f.name === feat.name);
        if ((hasChoiceAlready || hasFeatureAlready) && !feat.stackable) return false;
        const parentName = getParentName(feat);
        const hasDependencyMet = !parentName || character.features.some((f) => f.name === parentName);
        if (!hasDependencyMet) return false;
        return true;
      });

      if (validCandidates.length === 0) break;

      // Group valid candidates by root ancestor — each tree gets equal weight regardless of size
      const groups = {};
      for (const feat of validCandidates) {
        const rootName = getRoot(feat).name;
        if (!groups[rootName]) groups[rootName] = [];
        groups[rootName].push(feat);
      }

      // Stage 1: pick a random group (equal weight per group regardless of tree size)
      const groupKeys = Object.keys(groups);
      const pickedGroupKey = groupKeys[Math.floor(Math.random() * groupKeys.length)];

      // Stage 2: pick a random feature within that group
      const pickedGroup = groups[pickedGroupKey];
      const randoFeature = pickedGroup[Math.floor(Math.random() * pickedGroup.length)];

      choices.push(randoFeature);
    }

    setFeatureChoices(choices);
  };

  const handleClick = (feature) => {
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
        return (
          <div className="choice-modal-content" key={i}>
            <div className="choice-name" style={{ fontWeight: '700' }}>{feature.name}</div>
            <div className="choice-desc" style={{ fontSize: ".75em", overflow: "auto" }}>{feature.description}</div>
            <div className="choice-tier" style={{ marginTop: '5px' }}> Tier: {feature.tier}</div>
            <button className="choice-btn" onClick={() => { handleClick(feature) }}>Choose</button>
          </div>
        )
      })}
    </div>
  ) : null
}

export default ClassModal