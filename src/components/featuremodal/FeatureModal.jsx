import { useState, useEffect } from "react"
import "./featuremodal.css"



function ClassModal({isOpen, setIsOpen, shouldOpenSpellModal, setShouldOpenSpellModal, spellModalOpen, setSpellModalOpen, features, setFeatures, classFeatures, playerLevel}) {

    const tier1Features = classFeatures.filter(x => x.tier <= 1)
    const tier2Features = classFeatures.filter(x => x.tier <= 2)
    const tier3Features = classFeatures.filter(x => x.tier <= 3)

    console.log(shouldOpenSpellModal)

    const [featureChoices, setFeatureChoices] = useState([])

    useEffect(() => {
        getRandomChoices()
    },[isOpen])

    const closeModal = () => {
        setIsOpen(!isOpen)
        if(shouldOpenSpellModal){
            setSpellModalOpen(!spellModalOpen)
            if(setShouldOpenSpellModal){
              console.log("should open spell modal")
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
        console.log(playerLevel)
        while(i < 3){
          if(playerLevel >= 12){
            availableFeatures = tier3Features
          } else if(playerLevel >= 6){
            availableFeatures = tier2Features
          } else{
            availableFeatures = tier1Features
          }
          randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)]
          if (choices.includes(randoFeature) || features.includes(randoFeature) || features.includes(randoFeature.dependancy)){
            if(randoFeature.stackable){
                choices.push(randoFeature)
              i++
            } else{
            continue
            }
          } else{
            choices.push(randoFeature)
            i++
          }
        }
        setFeatureChoices(choices)
      }

      const chooseFeature = (feature) => {
        setFeatures([...features, feature])
      }

      const handleClick = (feature) => {
        chooseFeature(feature)
        closeModal()
      }

    return isOpen ? (
        <div id="choice-modal">
            {featureChoices.map((feature,i) => {
                return (
                    <div className="choice-modal-content" key={i}>
                        <div className="choice-name" style={{fontWeight:'700'}}>{feature.name}</div>
                        <div className="choice-desc" style={{fontSize:".75em", overflow:"auto"}}>{feature.description}</div>
                        <div className="choice-tier" style={{marginTop:'5px'}}> Tier: {feature.tier}</div>
                        <button className="choice-btn" onClick={() => {handleClick(feature)}}>Choose</button>
                    </div>
                )
            })}
        </div>
    ) : null
}
  
export default ClassModal