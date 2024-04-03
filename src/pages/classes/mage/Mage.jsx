import mageImage from "/public/assets/mage.png"
import bookImage from '/assets/book_icon.png'
import classFeatures from "./mageFeatures.json"
import "./mage.css"
import { useState } from "react"
import FeatureModal from "../../../components/featuremodal/FeatureModal"
import SpellModal from "../../../components/spellmodal/SpellModal"
import SpellBook from "../../../components/spellbook/SpellBook"


function Mage() {

    const [physical, setPhysical] = useState(10)
    
    const [fortitude, setFortitude] = useState(10)
    
    const [mental, setMental] = useState(10)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [playerLevel, setPlayerLevel] = useState(0)

    const [playerSpells, setPlayerSpells] = useState([])

    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const openSpellModal = () => {
        setIsSpellModalOpen(!isSpellModalOpen)
    }

    const openSpellBook = () => {
        setIsSpellBookOpen(!isSpellBookOpen)
    }

    const levelUp = () => {
        if(playerLevel % 2 === 0){
            openFeatureModal()
            setPlayerLevel(playerLevel + 1)
            return
        }
        setPlayerLevel(playerLevel + 1)
        openSpellModal()
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
                type="mage"
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
                shouldOpenSpellModal={true}
                playerLevel={playerLevel}
            />

            <div onClick={openSpellBook}>
             <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
            </div>
            
            <div className="characterCard">
               <img className="charImage" src={mageImage}/>
               <div className="cardText">
                    <div className="charName">Name: Lorem ipsum</div>
                    <div className="charDescription">In the realm of Aetherglen, a land shrouded in both beauty and peril, there walks a figure both enigmatic and formidable—Thorn Nightbreeze, an elven ranger who commands the shadows of the forest with a silent grace. Born under the Veil of Shadows, a mystical alignment of stars that blessed him with a profound connection to the darkened woods, Thorn has eyes that shimmer with the luminance of the stars themselves, capable of piercing through the deepest darkness. With a quiver of arrows, each fletched with feathers from the rare nightwing raven, and a bow carved from the heartwood of an ancient, whispering oak, Thorn seeks to uphold the delicate balance of nature against those who would seek to corrupt it. Silent as the night breeze for which he is named, he moves unseen, guided by the whispers of the forest and a steadfast resolve to protect his ancestral lands. Thorn's journey is one of relentless pursuit, driven by a quest to unearth an ancient evil that threatens not only the sanctity of his home but the very fabric of the realm itself.</div>
               </div>
            </div>
            
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
  
  export default Mage