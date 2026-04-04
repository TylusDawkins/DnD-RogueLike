import { useNavigate } from 'react-router-dom'
import "./CharacterSelectorModal.css"
import '../../../src/globals.css'
import type { Character, CharactersMap } from '../../types'

interface CharSelectorModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    characters: CharactersMap;
    setCharacters: (chars: CharactersMap) => void;
    setCharacter: (char: Character) => void;
}

export default function CharSelectorModal({ isOpen, setIsOpen, characters, setCharacters, setCharacter }: CharSelectorModalProps) {

    const navigate = useNavigate();

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const chooseCharacter = (character: Character) => {
        setCharacter(character)
        navigate(`character/${character.type}/${character.id}`)
    }

    const deleteCharacter = (characterId: string) => {
        const charactersCopy = { ...characters }
        delete charactersCopy[characterId]
        setCharacters(charactersCopy)
        localStorage.setItem("characters", JSON.stringify(charactersCopy))
    }

    if (!isOpen) return null

    if (!Object.keys(characters).length) {
        return (
            <div id="char-selector-modal">
                <div style={{ position: "fixed", right: "1em", fontSize: "2em", cursor: "pointer" }} onClick={closeModal}>X</div>
                <div style={{ position: "fixed", textAlign: "center", fontWeight: "bold", fontSize: "10em", margin: "10% auto" }}>Please select a class and save a character</div>
            </div>
        )
    }

    return isOpen ? (
        <div id="char-selector-modal">
            <div style={{ position: "absolute", top: "1.5em", right: "3.5em", fontSize: "3em", cursor: "pointer", zIndex: "2" }} onClick={closeModal}>X</div>
            <div className="characters centered">
                {Object.keys(characters).map((characterId, i) => {
                    return (
                        <div className="characterSelectorCard" key={i}>
                            <div className="charSelectorName">Name: {characters[characterId].name}</div>
                            <div className="charSelectorType">Class: {characters[characterId].type}</div>
                            <div className='selectDeleteDiv'>
                                <button style={{ height: "2em", width: "4em" }} onClick={() => { chooseCharacter(characters[characterId]) }}>Select</button>
                                <button style={{ height: "2em", width: "4em" }} onClick={() => { deleteCharacter(characterId) }}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    ) : null
}
