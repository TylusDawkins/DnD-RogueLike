import { useState, useEffect } from "react"
import "./featuremodal.css"



function ClassModal({isOpen, setIsOpen, features, setFeatures, classFeatures}) {

    const tier1Features = classFeatures.filter(x => x.tier === 1)
    const tier2Features = classFeatures.filter(x => x.tier === 2)
    const tier3Features = classFeatures.filter(x => x.tier === 3)

    const [featureChoices, setFeatureChoices] = useState([])

    useEffect(() => {
        getRandomChoices()
    },[isOpen])

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const getRandomChoices = () => {
        let i = 0
        let randoFeature
        let availableFeatures
        let choices = []
        // setChoices([])
        while(i < 3){
          if(i >= 12){
            availableFeatures = tier3Features + tier2Features + tier1Features
          } else if(i >= 6){
            availableFeatures = tier2Features + tier1Features
          } else{
            availableFeatures = tier1Features
          }
          randoFeature = availableFeatures[Math.floor(Math.random() * availableFeatures.length)]
          console.log(randoFeature)
          console.log(choices)
          if (choices.includes(randoFeature) || features.includes(randoFeature) || features.includes(randoFeature.dependancy) && !feautures){
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
        console.log(choices)
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
                console.log(feature)
                return (
                    <div className="choice-modal-content">
                        <div className="choice-name">{feature.name}</div>
                        <div className="choice-desc" style={{fontSize:".75em", overflow:"auto"}}>{feature.description}</div>
                        <div className="choice-tier">{feature.tier}</div>
                        <button className="choice-btn" onClick={() => {handleClick(feature)}}>Choose</button>
                    </div>
                )
            })}
        </div>
    ) : null
}
  
  export default ClassModal