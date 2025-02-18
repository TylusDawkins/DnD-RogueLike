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
    let i = 0;
    let randoFeature;
    let availableFeatures;
    let choices = [];

    const asi = classFeatures.find((e) => e.name === "Ability Score Improvement");
    choices.push(asi);

    while (i < 3) {
      if (playerLevel >= 12) {
        availableFeatures = tier3Features;
      } else if (playerLevel >= 6) {
        availableFeatures = tier2Features;
      } else {
        availableFeatures = tier1Features;
      }

      randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)];

      // Check if feature already exists or dependency isn't met
      const hasChoiceAlready = choices.some((feat) => feat.name === randoFeature.name)
      const hasFeatureAlready = character.features.some((feat) => feat.name === randoFeature.name);
      const hasDependencyAlready = !randoFeature.dependency || character.features.some((feat) => feat?.name === randoFeature.dependency);

      if (hasChoiceAlready) {
        return
      }

      if ((hasFeatureAlready || !hasDependencyAlready) && !randoFeature.stackable) {
        continue; // Skip to next iteration
      }

      // Feature can be added (not stacked or new feature)
      choices.push(randoFeature);
      i++;

      // Early return if enough features are chosen
      if (i === 3) {
        break;
      }
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