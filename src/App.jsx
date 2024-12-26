import Home from "@pages/Home/Home"
import Character from "@pages/Character/Character"
import './App.css'
import './globals.css'
import { useState, useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

  const charObj = {
    id: crypto.randomUUID(),
    name: "",
    description:"",
    type:"",
    level: 0,
    inventory:[],
    stats: {
        maxHp:0,
        currentHp:0,
        physical: 10,
        fortitude: 10,
        mental: 10,
        speed:30
    },
    features: [],
    spells: [],
    spellSlotsUsed: {
      0:0,
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0,
      7:0,
      8:0,
      9:0,
    },
    pointsLeft:0,
    totalPoints:0,
    spellPointsMax:0,
    currentSpellPoints:0
}

  const [characters, setCharacters] = useState([])

  const [character, setCharacter] = useState(charObj)

  const getCharacters = () => {
    const characters = JSON.parse(localStorage.getItem("characters"))
    if(!characters) {
      localStorage.setItem("characters",JSON.stringify(({})))
    }
    if(Object.keys(character).length != 0){
      setCharacters(characters)
    }
  }

  useEffect(()=>{
    getCharacters()
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home characters={characters} setCharacters={setCharacters} character={character} setCharacter={setCharacter}/>,
    },
    {
      path:"/character/:type/:id",
      element:<Character character={character} setCharacter={setCharacter} characters={characters} getCharacters={getCharacters}/>
    }
  ]);

  return (
    <div id="main">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
