import { useState, useEffect } from "react"
import "./featuremodal.css"



function ClassModal({ isOpen, setIsOpen, shouldOpenSpellModal, setShouldOpenSpellModal, spellModalOpen, setSpellModalOpen, addFeature, classFeatures, playerLevel, character, setCharacter, saveCharacter }) {

  const tier1Features = classFeatures.filter(x => x.tier <= 1)
  const tier2Features = classFeatures.filter(x => x.tier <= 2)
  const tier3Features = classFeatures.filter(x => x.tier <= 3)
  const [featureChoices, setFeatureChoices] = useState([])

  useEffect(() => {
    getRandomChoices()
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
    let i = 0
    let randoFeature
    let availableFeatures
    let choices = []
    // setChoices([])
    while (i < 3) {
      if (playerLevel >= 12) {
        availableFeatures = tier3Features
      } else if (playerLevel >= 6) {
        availableFeatures = tier2Features
      } else {
        availableFeatures = tier1Features
      }
      randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)];
      const hasDependency = character.features.some(feat => feat?.name?.toLowerCase() === randoFeature?.dependency?.toLowerCase());
      if (choices.includes(randoFeature) || character.features.includes(randoFeature)) {
        if (randoFeature.stackable) {
          choices.push(randoFeature)
          i++
          return
        }
        if (!hasDependency) {
          continue
        }
        else {
          continue
        }
      } else {
        choices.push(randoFeature)
        i++
      }
    }
    const asi = classFeatures.find((e)=>e.name==="Ability Score Improvement")
    choices.push(asi)
    setFeatureChoices(choices)
  }

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