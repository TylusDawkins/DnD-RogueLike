import { useState, useEffect } from "react"
import "./CharacterSelectorModal.css"
import '../../../src/globals.css'

export default function CharSelectorModal({ isOpen, setIsOpen, characters, setCharacters }) {

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    if (!isOpen) return

    if (!characters.length) {
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
            {characters?.map((character, i) => {
                return (
                    <div className="" key={i}>

                    </div>
                )
            })}
        </div>
    ) : null
}

