import { useNavigate } from 'react-router-dom'
import "./CharacterSelectorModal.css"
import '../../../src/globals.css'

export default function CharSelectorModal({ isOpen, setIsOpen, characters, setCharacters, setCharacter }) {

    const navigate = useNavigate();


    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const chooseCharacter = (character) => {
        setCharacter(character)
        navigate(`character/${character.type}/${character.id}`)
    }

    const deleteCharacter = (character) => {
        const charactersCopy = {...characters}
        delete charactersCopy[character]
        setCharacters(charactersCopy)
        localStorage.setItem("characters", JSON.stringify(charactersCopy))
    }

    if (!isOpen) return

    if (!Object.keys(characters).length) {
        return (
            <div id="char-selector-modal">
                <div style={{ position: "fixed", right: "1em", fontSize: "2em", cursor:"pointer"}} onClick={closeModal}>X</div>

                <div className="" style={{ position: "fixed", textAlign: "center", fontWeight: "bold", fontSize: "10em", margin:"10% auto" }}>Please select a class and save a character</div>
            </div>
        )
    }

    return isOpen ? (
        <div id="char-selector-modal">
            <div style={{ position: "absolute", top: "1.5em", right: "3.5em", fontSize: "3em", cursor:"pointer", zIndex:"2"}} onClick={closeModal}>X</div>
            <div className="characters centered">
                {Object.keys(characters).map((character, i) => {
                    return (
                        <div className="characterSelectorCard" key={i}>
                            <div className="charSelectorName">Name: {characters[character].name}</div>
                            <div className="charSelectorType">Class: {characters[character].type}</div>
                            <div className='selectDeleteDiv'>
                                <button style={{height:"2em", width:"4em"}} onClick={()=>{chooseCharacter(characters[character])}}>Select</button>
                                <button style={{height:"2em", width:"4em"}} onClick={()=>{deleteCharacter(character)}}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    ) : null
}

