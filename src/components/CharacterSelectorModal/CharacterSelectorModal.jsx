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
        navigate(`character/${character.type}`)
    }

    if (!isOpen) return

    if (!Object.keys(characters).length) {
        return (
            <div id="char-selector-modal">
                <div style={{ position: "fixed", top: ".5em", right: "1em", fontSize: "2em" }} onClick={closeModal}>X</div>

                <div className="centered" style={{ position: "fixed", textAlign: "center", fontWeight: "bold", fontSize: "10em" }}>Nothing here</div>
            </div>
        )
    }

    return isOpen ? (
        <div id="char-selector-modal">
            <div style={{ position: "fixed", top: ".5em", right: "1em", fontSize: "2em" }} onClick={closeModal}>X</div>
            <div className="characters">
                {Object.keys(characters).map((character, i) => {
                    return (
                        <div className="characterSelectorCard" key={i}>
                            <div className="charSelectorName">Name: {characters[character].name}</div>
                            <div className="charSelectorType">Class: {characters[character].type}</div>
                            <button style={{height:"2em", width:"4em"}} onClick={()=>{chooseCharacter(characters[character])}}>Select</button>
                        </div>
                    )
                })}
            </div>
        </div>
    ) : null
}

