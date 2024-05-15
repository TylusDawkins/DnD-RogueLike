import fighterImage from "/public/assets/fighter.png"
import backImage from "/public/assets/back_scroll.png"
import classFeatures from "@utils/fighterFeatures.json"
import "./fighter.css"
import { useState } from "react"
import FeatureModal from "../../../components/featuremodal/FeatureModal"


function Fighter() {

    const baseStats = {
        physical: 10,
        fortitude: 10,
        mental: 10
    }

    const [stats, setStats] = useState(baseStats)

    const [features, setFeatures] = useState([])

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [playerLevel, setPlayerLevel] = useState(0)

    const [pointsLeft, setPointsLeft] = useState(0)

    const [totalPoints, setTotalPoints] = useState(0)

    const changeStats = (stat, change) => {
        if (stats[stat] + change < 10) {
            alert("Stats cannot go below 10")
            return
        }
        if (change > 0 && !pointsLeft) {
            console.log(change)
            alert("No points available");
            return
        }
        let shallodwStatsCopy = stats
        shallodwStatsCopy[stat] += change
        setStats({ ...shallodwStatsCopy })
        setPointsLeft(pointsLeft - change)
    }


    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const levelUp = () => {
        openFeatureModal()
        setPlayerLevel(playerLevel + 1)
        setPointsLeft(pointsLeft + 2)
        setTotalPoints(totalPoints + 2)
    }

    return (
        <div className="main">
            <a href="/">
                <img src={backImage} className="backImage" />
            </a>

            <FeatureModal
                classFeatures={classFeatures}
                isOpen={isFeatureModalOpen}
                setIsOpen={setIsFeatureModalOpen}
                features={features}
                setFeatures={setFeatures}
                playerLevel={playerLevel}
            />
            <div className="characterCard">
                <img className="charImage" src={fighterImage} />
                <div className="cardText">
                    <div className="charName">Name: Lorem ipsum</div>
                    <div className="charDescription">In the realm of Aetherglen, a land shrouded in both beauty and peril, there walks a figure both enigmatic and formidable—Thorn Nightbreeze, an elven ranger who commands the shadows of the forest with a silent grace. Born under the Veil of Shadows, a mystical alignment of stars that blessed him with a profound connection to the darkened woods, Thorn has eyes that shimmer with the luminance of the stars themselves, capable of piercing through the deepest darkness. With a quiver of arrows, each fletched with feathers from the rare nightwing raven, and a bow carved from the heartwood of an ancient, whispering oak, Thorn seeks to uphold the delicate balance of nature against those who would seek to corrupt it. Silent as the night breeze for which he is named, he moves unseen, guided by the whispers of the forest and a steadfast resolve to protect his ancestral lands. Thorn's journey is one of relentless pursuit, driven by a quest to unearth an ancient evil that threatens not only the sanctity of his home but the very fabric of the realm itself.</div>
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

export default Fighter