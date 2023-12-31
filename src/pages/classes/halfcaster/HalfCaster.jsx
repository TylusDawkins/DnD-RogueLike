import halfCasterImage from "/public/assets/half-caster.png"
import classFeatures from "./halfCasterFeatures.json"
import "./halfcaster.css"
import { useState } from "react"
import FeatureModal from "../FeatureModal/FeatureModal"


function HalfCaster() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    // const [choices, setChoices] = useState([])


    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    return (
        <div className="main">
            <FeatureModal 
            isOpen={isFeatureModalOpen}
            setIsOpen={setIsFeatureModalOpen}
            features={features}
            setFeatures={setFeatures}
            classFeatures={classFeatures}
            />
            <img className="charImage" src={halfCasterImage}/>
            <div className="characterInfo">
                <h1>Stats</h1>
                <div className="stats">
                    <h2>Physical: {physical}</h2>
                    <h2>Fortitude: {fortitude}</h2>
                    <h2>Mental: {mental}</h2>
                </div>
                <button id="levelButton" onClick={openFeatureModal}>Level up!</button>
                <div className="features">
                    {features.map((feature,i) => {
                        return <h3 key={i}>Level {i+1}: {feature.name}</h3>
                    })}
                </div>
            </div>
        </div>
    )
  }
  
  export default HalfCaster