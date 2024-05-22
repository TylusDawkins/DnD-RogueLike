import { useEffect } from "react"
import "./CharacterSelectorModal.css"
import '../../../src/globals.css'

export default function CharSelectorModal({ isOpen, setIsOpen, characters, setCharacters }) {

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        console.log(characters)
    },[])


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
            {Object.keys(characters).map((character, i) => {
                console.log(characters[character])
                return (
                    <div className="characterSelectorCard" key={i}>
                        <div className="charSelectorName">{characters[character].name}</div>
                        <div className="charSelectorType">{characters[character].type}</div>
                    </div>
                )
            })}
        </div>
    ) : null
}

