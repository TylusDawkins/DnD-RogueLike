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

    const type = character.type || useParams().type 

    console.log(type)

    const [isFeatureModalOpen, setIsFeatureModalOpen] = useState(false)

    const [isSpellModalOpen, setIsSpellModalOpen] = useState(false)

    const [isSpellBookOpen, setIsSpellBookOpen] = useState(false)

    const [shouldOpenSpellModal, setShouldOpenSpellModal] = useState(true)

    const [pointsLeft, setPointsLeft] = useState(0)

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
        characterCopy.type = type
        setCharacter({...characterCopy})
    }

    localStorage.setItem("characters",JSON.stringify({}))

    const saveCharacter = () => {
        const characters = JSON.parse(localStorage.getItem("characters"))
        if(character.name){
            characters[character.name] = character
            localStorage.setItem("characters",JSON.stringify(characters))
            console.log(characters)
        }
        console.log(characters)
        console.log(character)
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

            <button style={{position:"fixed", width:"5%", top:"5.5em",right:"0"}} onClick={saveCharacter}>Save</button>

            <div onClick={openSpellBook}>
                <img src={bookImage} className="bookImage" onClick={openSpellBook}></img>
            </div>

            <div className="characterCard">
                <img className="charImage" src={charClass.image} />
                <div className="cardText">
                    <div className="charName">Name: <input style={{backgroundColor:""}} onChange={(e)=>{changeName(e)}}></input></div>
                    <div className="charDescription charText"> Description: <br></br> <textarea className='dark charTextArea' onChange={(e)=>{changeDescription(e)}}></textarea></div>
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
