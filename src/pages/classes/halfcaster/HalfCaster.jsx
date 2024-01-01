import halfCasterImage from "/public/assets/half-caster.png"
import bookImage from '/assets/book_icon.png'
import classFeatures from "./halfCasterFeatures.json"
import "./halfcaster.css"
import { useState } from "react"
import FeatureModal from "../../../components/featuremodal/FeatureModal"
import SpellModal from "../../../components/spellmodal/SpellModal"
import SpellBook from "../../../components/spellbook/SpellBook"


function HalfCaster() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [playerLevel, setPlayerLevel] = useState(0)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [shouldOpenSpellModal, setShouldOpenSpellModal] = useState(true)

    const [playerSpells, setPlayerSpells] = useState([])

    

    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const openSpellBook = () => {
        setIsSpellBookOpen(!isSpellBookOpen)
    }

    const levelUp = () => {
            openFeatureModal()
            setPlayerLevel(playerLevel + 1)
    }


    return (
        <div className="main">
            <SpellBook
                spells={playerSpells}
                isOpen={isSpellBookOpen}
                setIsOpen={setIsSpellBookOpen}
            />
            
            <SpellModal
                playerLevel={playerLevel}
                setPlayerLevel={setPlayerLevel}
                type="halfcaster"
                isOpen={isSpellModalOpen}
                setIsOpen={setIsSpellModalOpen}
                playerSpells={playerSpells}
                setPlayerSpells={setPlayerSpells}
            />

            <FeatureModal 
                classFeatures={classFeatures}
                isOpen={isFeatureModalOpen}
                setIsOpen={setIsFeatureModalOpen}
                features={features}
                setFeatures={setFeatures}
                spellModalOpen={isSpellModalOpen}
                setSpellModalOpen={setIsSpellModalOpen}
                shouldOpenSpellModal={shouldOpenSpellModal}
                setShouldOpenSpellModal={setShouldOpenSpellModal}
                playerLevel={playerLevel}
            />

            <div onClick={openSpellBook}>
                <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
            </div>

            <img className="charImage" src={halfCasterImage}/>
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
  
  export default HalfCaster