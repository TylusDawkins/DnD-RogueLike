import bookImage from '/assets/book_icon.png'
import backImage from "/public/assets/back_scroll.png"
import "./Character.css"
import { useState } from "react"
import FeatureModal from "@components/featuremodal/FeatureModal"
import SpellModal from "@components/spellmodal/SpellModal"
import SpellBook from "@components/spellbook/SpellBook"
import types from "@utils/types"
import { useParams } from 'react-router-dom'

export default function Character({character, setCharacter}) {

    const {type} = useParams()

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [pointsLeft, setPointsLeft] = useState(0)

    const [totalPoints, setTotalPoints] = useState(0)

    const classImage = types[character.type || type].image

    const classFeatures = types[character.type || type].features
    
    const openFeatureModal = () => {
        setIsFeatureModalOpen(!isFeatureModalOpen)
    }

    const openSpellModal = () => {
        setIsSpellModalOpen(!isSpellModalOpen)
    }

    const openSpellBook = () => {
        setIsSpellBookOpen(!isSpellBookOpen)
    }

    const addSpell = (spell) => {
        const characterCopy = {...character}
        characterCopy.spells.push(spell)
        setCharacter({...characterCopy})
    }

    const addFeature = (feature) => {
        const characterCopy = {...character}
        characterCopy.features.push(feature)
        setCharacter({...characterCopy})
    }

    const changeStats = (stat, change) => {
        if (character.stats[stat] + change < 10) {
            alert("Stats cannot go below 10")
            return
        }
        if (change > 0 && !pointsLeft) {
            console.log(change)
            alert("No points available");
            return
        }
        let shallowcharacterCopy = {...character}
        shallowcharacterCopy.stats[stat] += change
        setCharacter({ ...shallowcharacterCopy })
        setPointsLeft(pointsLeft - change)
    }

    const levelUp = () => {
        let shallowcharacterCopy = {...character}
        shallowcharacterCopy.level += 1
        setCharacter({...shallowcharacterCopy})
        setPointsLeft(pointsLeft + 1)
        setTotalPoints(totalPoints + 1)
        if (character.level % 2 === 0) {
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
                spells={character.spells}
                isOpen={isSpellBookOpen}
                setIsOpen={setIsSpellBookOpen}
            />

            <SpellModal
                playerLevel={character.level}
                type="mage"
                isOpen={isSpellModalOpen}
                setIsOpen={setIsSpellModalOpen}
                playerSpells={character.spells}
                addSpell={addSpell}
            />

            <FeatureModal
                classFeatures={classFeatures}
                isOpen={isFeatureModalOpen}
                setIsOpen={setIsFeatureModalOpen}
                features={character.features}
                addFeature={addFeature}
                spellModalOpen={isSpellModalOpen}
                setSpellModalOpen={setIsSpellModalOpen}
                shouldOpenSpellModal={true}
                playerLevel={character.level}
            />

            <div onClick={openSpellBook}>
                <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
            </div>

            <div className="characterCard">
                <img className="charImage" src={classImage} />
                <div className="cardText">
                    <div className="charName">Name: Lorem ipsum</div>
                    <div className="charDescription">In the realm of Aetherglen, a land shrouded in both beauty and peril, there walks a figure both enigmatic and formidable—Thorn Nightbreeze, an elven ranger who commands the shadows of the forest with a silent grace. Born under the Veil of Shadows, a mystical alignment of stars that blessed him with a profound connection to the darkened woods, Thorn has eyes that shimmer with the luminance of the stars themselves, capable of piercing through the deepest darkness. With a quiver of arrows, each fletched with feathers from the rare nightwing raven, and a bow carved from the heartwood of an ancient, whispering oak, Thorn seeks to uphold the delicate balance of nature against those who would seek to corrupt it. Silent as the night breeze for which he is named, he moves unseen, guided by the whispers of the forest and a steadfast resolve to protect his ancestral lands. Thorns journey is one of relentless pursuit, driven by a quest to unearth an ancient evil that threatens not only the sanctity of his home but the very fabric of the realm itself.</div>
                </div>
            </div>

            <div className="characterInfo">
                <h1>Stats</h1>
                <div className="levelInfo">
                    <h1>LeveL: {character.level}</h1>
                    <h1>Points Left: {pointsLeft}</h1>
                </div>
                <div className="stats">
                    <div id="stat">
                        <h2 id="physical">Physical: {character.stats.physical}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("physical", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("physical", -1) }}>↓</button>
                        </div>
                    </div>
                    <div id="stat">
                        <h2>Fortitude: {character.stats.fortitude}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("fortitude", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("fortitude", -1) }}>↓</button>
                        </div>
                    </div>
                    <div id="stat">
                        <h2>Mental: {character.stats.mental}</h2>
                        <div className="statButtons">
                            <button className="statButton" onClick={() => { changeStats("mental", 1) }}>↑</button>
                            <button className="statButton" onClick={() => { changeStats("mental", -1) }}>↓</button>
                        </div>
                    </div>
                </div>
                <button id="levelButton" onClick={levelUp}>Level up!</button>
                <div className="features">
                    {character.features.map((feature, i) => {
                        return <h3 key={i}>Level {i + 1}: {feature.name}</h3>
                    })}
                </div>
            </div>
        </div>
    )
}
