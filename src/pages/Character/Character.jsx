import bookImage from '/assets/book_icon.png'
import backImage from "/public/assets/back_scroll.png"
import "./Character.css"
import "/src/globals.css"
import { useEffect, useState } from "react"
import FeatureModal from "@components/featuremodal/FeatureModal"
import SpellModal from "@components/spellmodal/SpellModal"
import SpellBook from "@components/spellbook/SpellBook"
import classes from "@utils/classes"
import { useParams } from 'react-router-dom'

export default function Character({ character, setCharacter }) {

    const { type } = useParams()

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [shouldOpenSpellModal, setShouldOpenSpellModal] = useState(true)

    const [pointsLeft, setPointsLeft] = useState(0)

    // const classImage = classes[character.type || type].image

    // const classFeatures = classes[character.type || type].features

    // const canCast = classes[character.type || type].canCast

    const charClass = classes.find((c) => {
        return c.name == type
    })

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
        const characterCopy = { ...character }
        characterCopy.spells.push(spell)
        setCharacter({ ...characterCopy })
    }

    const addFeature = (feature) => {
        const characterCopy = { ...character }
        characterCopy.features.push(feature)
        setCharacter({ ...characterCopy })
    }

    const initCharacter = () => {
        let characterCopy = { ...character }
        characterCopy.stats.hpMod = charClass.baseStats.hpMod
        characterCopy.stats.maxHp = characterCopy.stats.hpMod * characterCopy.stats.fortitude
        characterCopy.stats.currentHp = characterCopy.stats.maxHp
    }

    const changeHp = (e) => {
        let characterCopy = { ...character }
        characterCopy.stats.currentHp = e.target.value
        setCharacter(characterCopy)
    }

    const changeStats = (stat, change) => {
        if (character.stats[stat] + change < 10) {
            alert("Stats cannot go below 10")
            return
        }
        if (change > 0 && !character.pointsLeft) {
            console.log(change)
            alert("No points available");
            return
        }
        let shallowCharacterCopy = { ...character }
        shallowCharacterCopy.stats[stat] += change
        shallowCharacterCopy.pointsLeft -= change
        setCharacter({ ...shallowCharacterCopy })
        setPointsLeft(pointsLeft - change)
    }

    const levelUp = () => {
        if(character.pointsLeft){
            alert("Please spend all points before leveling")
            return
        }
        let shallowCharacterCopy = { ...character }
        shallowCharacterCopy.level += 1
        console.log(charClass.hpMod, shallowCharacterCopy.stats.fortitude)
        shallowCharacterCopy.stats.maxHp += charClass.baseStats.hpMod * (shallowCharacterCopy.stats.fortitude / 2)
        if (type == "Fighter") {
            shallowCharacterCopy.pointsLeft += 2
            shallowCharacterCopy.totalPoints += 2
            setCharacter(shallowCharacterCopy)
        } else {
            shallowCharacterCopy.pointsLeft += 1
            shallowCharacterCopy.totalPoints += 1
            setCharacter(shallowCharacterCopy)
        }
        if (type == "Mage") {
            if (character.level % 2 === 0) {
                openFeatureModal()
                return
            }
            openSpellModal()
            return
        }
        openFeatureModal()
    }

    useEffect(() => {
        initCharacter()
    }, [])

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
                classFeatures={charClass.features}
                isOpen={isFeatureModalOpen}
                setIsOpen={setIsFeatureModalOpen}
                features={character.features}
                addFeature={addFeature}
                spellModalOpen={isSpellModalOpen}
                setSpellModalOpen={setIsSpellModalOpen}
                shouldOpenSpellModal={charClass.canCast ? shouldOpenSpellModal : false}
                setShouldOpenSpellModal={charClass.canCast ? setShouldOpenSpellModal : (() => { })}
                playerLevel={character.level}
                character={character}
                setCharacter={setCharacter}
            />

            <div onClick={openSpellBook}>
                <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
            </div>

            <div className="characterCard">
                <img className="charImage" src={charClass.image} />
                <div className="cardText">
                    <div className="charName">Name: <input style={{backgroundColor:""}}></input></div>
                    <div className="charDescription">In the realm of Aetherglen, a land shrouded in both beauty and peril, there walks a figure both enigmatic and formidable—Thorn Nightbreeze, an elven ranger who commands the shadows of the forest with a silent grace. Born under the Veil of Shadows, a mystical alignment of stars that blessed him with a profound connection to the darkened woods, Thorn has eyes that shimmer with the luminance of the stars themselves, capable of piercing through the deepest darkness. With a quiver of arrows, each fletched with feathers from the rare nightwing raven, and a bow carved from the heartwood of an ancient, whispering oak, Thorn seeks to uphold the delicate balance of nature against those who would seek to corrupt it. Silent as the night breeze for which he is named, he moves unseen, guided by the whispers of the forest and a steadfast resolve to protect his ancestral lands. Thorns journey is one of relentless pursuit, driven by a quest to unearth an ancient evil that threatens not only the sanctity of his home but the very fabric of the realm itself.</div>
                </div>
            </div>

            <div className="characterInfo">
                <h1>Stats</h1>
                <div className="topInfo">
                    <div className='levelInfo'>
                        <h1>Level: {character.level}</h1>
                        <h1>Points Left: {character.pointsLeft}</h1> 
                    </div>
                    <div className='hpInfo'>
                        <h1> Max HP: {character.stats.maxHp}</h1>
                        <h1>Current HP: <input type="number" min={0} max={character.stats.maxHp} value={character.stats.currentHp} className='hpInput' onChange={(e)=>{changeHp(e)}} style={{}}></input></h1>
                    </div>
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
