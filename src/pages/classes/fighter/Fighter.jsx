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

    const [playerLevel, setPlayerLevel] = useState(1)

    // const [choices, setChoices] = useState([])


    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    return (
        <div className="main">
            <FeatureModal 
            classFeatures={classFeatures}
            isOpen={isFeatureModalOpen}
            setIsOpen={setIsFeatureModalOpen}
            features={features}
            setFeatures={setFeatures}
            />
            <img className="charImage" src={fighterImage}/>
            <div className="characterInfo">
                <h1 className="text">Stats</h1>
                <div className="stats">
                    <h2 className="text">Physical: {physical}</h2>
                    <h2 className="text">Fortitude: {fortitude}</h2>
                    <h2 className="text">Mental: {mental}</h2>
                </div>
                <button id="levelButton" onClick={openFeatureModal}>Level up!</button>
                <div className="features">
                    {features.map((feature,i) => {
                        return <h3 className="text" key={i}>Level {i+1}: {feature.name}</h3>
                    })}
                </div>
            </div>
        </div>
    )
  }
  
  export default Fighter