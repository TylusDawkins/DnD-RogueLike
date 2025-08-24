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
    let randoFeature; // Randomly selected feature from available features
    let availableFeatures; // Features available for selection based on player level
    let choices = []; // Array to hold the selected features
    let target = 4

    if (playerLevel >= 12) {
      availableFeatures = tier3Features;
    } else if (playerLevel >= 6) {
      availableFeatures = tier2Features;
    } else {
      availableFeatures = tier1Features;
    }


    const asi = classFeatures.find((e) => e.name === "Ability Score Improvement"); // add this as a default incase all options are undesireable
    if (asi) choices.push(asi);
    let maxAttempts = 0; // Number of attempts to get valid features
    while (choices.length < target && maxAttempts < 100) { // Limit attempts to avoid infinite loop
      maxAttempts++;

      if (!availableFeatures || availableFeatures.length === 0){
        alert("[BUG] NO AVAILABLE FEATURES FOR SELECTION")
        throw warning("No available features for selection.");
      } 

      randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)];

      // Check if feature already exists or dependency isn't met
      const hasChoiceAlready = choices.some((feat) => feat.name === randoFeature.name)
      const hasFeatureAlready = character.features.some((feat) => feat.name === randoFeature.name);
      const hasDependencyAlready = !randoFeature.dependency || character.features.some((feat) => feat?.name === randoFeature.dependency);
      const isASI = randoFeature.name === "Ability Score Improvement";

      if((hasChoiceAlready || hasFeatureAlready) && !randoFeature.stackable) {
        continue
      }

      if (!hasDependencyAlready || isASI) {
        continue; // Skip to next iteration
      }

      // Feature can be added (not stacked or new feature)
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