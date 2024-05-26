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

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [shouldOpenSpellModal, setShouldOpenSpellModal] = useState(true)

    const [pointsLeft, setPointsLeft] = useState(0)

    const type = useParams().type

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
        characterCopy.stats.maxHp = character.stats.maxHp || characterCopy.stats.hpMod * characterCopy.stats.fortitude
        characterCopy.stats.currentHp = character.stats.currentHp || characterCopy.stats.maxHp
        characterCopy.type = type
        if (charClass.canCast) {
            characterCopy.maxSpellPoints = charClass.spellPoints[character.level]
            characterCopy.currentSpellPoints = character.currentSpellPoints || charClass.spellPoints[character.level]
        }
        characterCopy.type = character.type || type
        setCharacter({ ...characterCopy })
    }

    const saveCharacter = () => {
        const characters = JSON.parse(localStorage.getItem("characters"))
        if (character.name) {
            characters[character.id] = character
            localStorage.setItem("characters", JSON.stringify(characters))
        }
    }

    const changeHp = (e) => {
        let characterCopy = { ...character }
        characterCopy.stats.currentHp = e.target.value
        setCharacter(characterCopy)
    }

    const changeName = (e) => {
        let characterCopy = { ...character }
        characterCopy.name = e.target.value
        setCharacter(characterCopy)
    }

    const changeDescription = (e) => {
        let characterCopy = { ...character }
        characterCopy.description = e.target.value
        setCharacter(characterCopy)
    }

    const changeStats = (stat, change) => {
        if (character.stats[stat] + change < 10) {
            alert("Stats cannot go below 10")
            return
        }
        if (change > 0 && !character.pointsLeft) {
            alert("No points available");
            return
        }
        let characterCopy = { ...character }
        characterCopy.stats[stat] += change
        characterCopy.pointsLeft -= change
        setCharacter({ ...characterCopy })
        setPointsLeft(pointsLeft - change)
    }

    const levelUp = () => {
        if (character.pointsLeft) {
            alert("Please spend all points before leveling")
            return
        }
        if (character.level >= 20) {
            alert("You are at your maximum level")
            return
        }
        let characterCopy = { ...character }
        characterCopy.level += 1
        characterCopy.stats.maxHp += charClass.baseStats.hpMod * (characterCopy.stats.fortitude / 2)
        characterCopy.stats.currentHp += charClass.baseStats.hpMod * (characterCopy.stats.fortitude / 2)
        if(charClass.canCast){
            characterCopy.maxSpellPoints = charClass.spellPoints[characterCopy.level]
            characterCopy.currentSpellPoints += (charClass.spellPoints[characterCopy.level] - charClass.spellPoints[characterCopy.level-1])
        }
        if (type == "Fighter") {
            characterCopy.pointsLeft += 2
            characterCopy.totalPoints += 2
            setCharacter(characterCopy)
        } else {
            characterCopy.pointsLeft += 1
            characterCopy.totalPoints += 1
            setCharacter(characterCopy)
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

            <div className='topRight'>
                {charClass.canCast ?
                    <>
                        <SpellBook
                            spells={character.spells}
                            isOpen={isSpellBookOpen}
                            setIsOpen={setIsSpellBookOpen}
                            character={character}
                            setCharacter={setCharacter}
                        />
                        <div onClick={openSpellBook}>
                            <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
                        </div></> : null}
                <button onClick={saveCharacter}>Save</button>
            </div>



            <SpellModal
                playerLevel={character.level}
                type="mage"
                isOpen={isSpellModalOpen}
                setIsOpen={setIsSpellModalOpen}
                playerSpells={character.spells}
                addSpell={addSpell}
                currentSpellPoints={character.currentSpellPoints}
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

            <div className="characterCard">
                <img className="charImage" src={charClass.image} />
                <div className="cardText">
                    <div className="charName">Name: <input style={{ backgroundColor: "" }} onChange={(e) => { changeName(e) }} value={character.name}></input></div>
                    <div className="charDescription charText"> Description: <br></br> <textarea className='dark charTextArea' onChange={(e) => { changeDescription(e) }} value={character.description}></textarea></div>
                </div>
            </div>

            <div className="characterInfo">
                <h1>Stats</h1>
                <div className="topInfo">
                    <div className='levelInfo'>
                        <h1>Level: {character.level}</h1>
                        <h1>Stat Points Left: {character.pointsLeft}</h1>
                    </div>
                    <div className='hpInfo'>
                        <h1> Max HP: {character.stats.maxHp}</h1>
                        <h1>Current HP: <input type="number" min={0} max={character.stats.maxHp} value={character.stats.currentHp} className='hpInput' onChange={(e) => { changeHp(e) }} style={{}}></input></h1>
                    </div>
                    {charClass.canCast ? <div className='spellPointsInfo'>
                        <h1>Max Spell Points: {character.maxSpellPoints}</h1>
                        <h1>Current Spell Points: {character.currentSpellPoints}</h1>
                    </div> : null}
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
