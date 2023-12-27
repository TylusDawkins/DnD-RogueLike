import fighterImage from "/public/assets/fighter.png"
import classFeatures from "./fighterFeatures.json"
import "./fighter.css"
import { useState } from "react"
import FeatureModal from "../FeatureModal/FeatureModal"


function Fighter() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState(["Nothing yet!"])

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
            />
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
                        return <p key={i}>{feature}</p>
                    })}
                </div>
            </div>
            <img className="charImage" src={fighterImage}/>
        </div>
    )
  }
  
  export default Fighter