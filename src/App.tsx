import Home from "@pages/Home/Home"
import Character from "@pages/Character/Character"
import './App.css'
import './globals.css'
import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { Character as CharacterType, CharactersMap, Reward } from './types'

function App() {

  const charObj: CharacterType = {
    id: crypto.randomUUID(),
    name: "",
    description: "",
    type: "",
    level: 0,
    inventory: [] as Reward[],
    stats: {
      maxHp: 0,
      currentHp: 0,
      physical: 10,
      fortitude: 10,
      mental: 10,
      speed: 30
    },
    features: [],
    spells: [],
    spellSlotsUsed: {
      0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0,
    },
    pointsLeft: 0,
    totalPoints: 0,
    spellPointsMax: 0,
    currentSpellPoints: 0
  }

  const [characters, setCharacters] = useState<CharactersMap>({})

  const [character, setCharacter] = useState<CharacterType>(charObj)

  const getCharacters = () => {
    const stored = JSON.parse(localStorage.getItem("characters") || "{}") as CharactersMap
    if (!stored || Object.keys(stored).length === 0) {
      localStorage.setItem("characters", JSON.stringify({}))
    }
    if (Object.keys(character).length !== 0) {
      setCharacters(stored)
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home characters={characters} setCharacters={setCharacters} character={character} setCharacter={setCharacter} />,
    },
    {
      path: "/character/:type/:id",
      element: <Character character={character} setCharacter={setCharacter} characters={characters} getCharacters={getCharacters} />
    }
  ]);

  return (
    <div id="main">
      <RouterProvider router={router} />
      <div id="background"></div>
    </div>
  )
}

export default App
