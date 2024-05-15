import Home from "@pages/home/home"
import Character from "@pages/Character/Character"
import './App.css'
import './globals.css'
import { useState, useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

  const charObj = {
    name: "",
    description:"",
    type:"",
    level: 0,
    stats: {
        maxHp:0,
        currentHp:0,
        physical: 10,
        fortitude: 10,
        mental: 10,
    },
    features: [],
    spells: [],
    pointsLeft:0,
    totalPoints:0
}

  const [characters, setCharacters] = useState([])

  const [character, setCharacter] = useState(charObj)

  const checkCharacters = () => {
    const characters = JSON.parse(localStorage.getItem("characters"))
    if(!characters){
      localStorage.setItem("characters",JSON.stringify([]))
    }
  }

  const getCharacters = () => {
    setCharacters(JSON.parse(localStorage.getItem("characters")))
  }

  useEffect(()=>{
    checkCharacters()
    getCharacters()
  },[])

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home characters={characters} setCharacters={setCharacters} setCharacter={setCharacter}/>,
    },
    {
      path:"/character/:type",
      element:<Character character={character} setCharacter={setCharacter}/>
    }
  ]);

  return (
    <div id="main">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
