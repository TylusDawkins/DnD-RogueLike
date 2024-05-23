import mageImage from "@assets/mage.png"
import bookImage from '@assets/book_icon.png'
import backImage from "@assets/back_scroll.png"
import classFeatures from "@utils/mageFeatures.json"
import "./mage.css"
import { useState } from "react"
import FeatureModal from "../../../components/featuremodal/FeatureModal"
import SpellModal from "../../../components/spellmodal/SpellModal"
import SpellBook from "../../../components/spellbook/SpellBook"

function Mage() {

    const baseStats = {
        physical: 10,
        fortitude: 10,
        mental: 10
    }

    const [stats, setStats] = useState(baseStats)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [playerLevel, setPlayerLevel] = useState(0)

    const [playerSpells, setPlayerSpells] = useState([])

    const [pointsLeft, setPointsLeft] = useState(0)

    const [totalPoints, setTotalPoints] = useState(0)

    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const openSpellModal = () => {
        setIsSpellModalOpen(!isSpellModalOpen)
    }

    const openSpellBook = () => {
        setIsSpellBookOpen(!isSpellBookOpen)
    }

    const changeStats = (stat, change) => {
        if (stats[stat] + change < 10) {
            alert("Stats cannot go below 10")
            return
        }
        if (change > 0 && !pointsLeft) {
            alert("No points available");
            return
        }
        let shallodwStatsCopy = stats
        shallodwStatsCopy[stat] += change
        setStats({ ...shallodwStatsCopy })
        setPointsLeft(pointsLeft - change)
    }

    const levelUp = () => {
        setPlayerLevel(playerLevel + 1)
        setPointsLeft(pointsLeft + 1)
        setTotalPoints(totalPoints + 1)
        if (playerLevel % 2 === 0) {
            openFeatureModal()
            return
        }
        openSpellModal()
    }

    return (
        <div className="main">

            <a href="/">
                <img src={backImage} className="backImage" />
            </a>

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
                <img className="charImage" src={mageImage} />
                <div className="cardText">
                    <div className="charName">Name: Lorem ipsum</div>
                    <div className="charDescription"></div>
                </div>
            </div>

            <div className="characterInfo">
                <h1>Stats</h1>
                <div className="levelInfo">
                    <h1>LeveL: {playerLevel}</h1>
                    <h1>Points Left: {pointsLeft}</h1>
                </div>
                <div className="stats">
                    <div id="stat">
                        <h2 id="physical">Physical: {stats.physical}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("physical", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("physical", -1) }}>↓</button>
                        </div>
                    </div>
                    <div id="stat">
                        <h2>Fortitude: {stats.fortitude}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("fortitude", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("fortitude", -1) }}>↓</button>
                        </div>
                    </div>
                    <div id="stat">
                        <h2>Mental: {stats.mental}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("mental", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("mental", -1) }}>↓</button>
                        </div>
                    </div>
                </div>
                <button id="levelButton" onClick={levelUp}>Level up!</button>
                <div className="features">
                    {features.map((feature, i) => {
                        return <h3 key={i}>Level {i + 1}: {feature.name}</h3>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Mage