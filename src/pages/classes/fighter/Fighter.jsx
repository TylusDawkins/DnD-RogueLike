import fighterImage from "/public/assets/fighter.png"
import classFeatures from "./fighterFeatures.json"
import "./fighter.css"
import { useState } from "react"
import FeatureModal from "../../../components/featuremodal/FeatureModal"


function Fighter() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [playerLevel, setPlayerLevel] = useState(0)

    // const [choices, setChoices] = useState([])


    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const levelUp = () => {
            openFeatureModal()
            setPlayerLevel(playerLevel + 1)
    }

    return (
        <div className="main">
            <FeatureModal 
            classFeatures={classFeatures}
            isOpen={isFeatureModalOpen}
            setIsOpen={setIsFeatureModalOpen}
            features={features}
            setFeatures={setFeatures}
            playerLevel={playerLevel}
            />
            <img className="charImage" src={fighterImage}/>
            <div className="characterInfo">
                <h1>Stats</h1>
                <h1>LeveL: {playerLevel}</h1>
                <div className="stats">
                    <h2>Physical: {physical}</h2>
                    <h2>Fortitude: {fortitude}</h2>
                    <h2>Mental: {mental}</h2>
                </div>
                <button id="levelButton" onClick={levelUp}>Level up!</button>
                <div className="features">
                    {features.map((feature,i) => {
                        return <h3 key={i}>Level {i+1}: {feature.name}</h3>
                    })}
                </div>
            </div>
        </div>
    )
  }
  
  export default Fighter