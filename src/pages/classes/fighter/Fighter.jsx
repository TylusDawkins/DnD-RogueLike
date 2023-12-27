import fighterImage from "/public/assets/fighter.png"
import features from "./fighterFeatures.json"
import "./fighter.css"
import { useState } from "react"


function Fighter() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState(["Nothing yet!"])

    return (
        <div className="main">
            <img src={fighterImage}/>
            <div className="characterInfo">
                <h2>Level up!</h2>
                <h2>Stats</h2>
                <div className="stats">
                    <h4>Physical: {physical}</h4>
                    <h4>Fortitude: {fortitude}</h4>
                    <h4>Mental: {mental}</h4>
                </div>
                <div className="features">
                    {features.map((feature) => {
                        return <div>{feature}</div>
                    })}
                </div>
            </div>
        </div>
    )
  }
  
  export default Fighter