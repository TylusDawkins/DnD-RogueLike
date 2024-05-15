import Home from "@pages/home/home"
import Character from "@pages/Character/Character"
import './App.css'
import './globals.css'
import { useState, useEffect } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

  const [characters, setCharacters] = useState([])

  const [character, setCharacter] = useState(null)

  const checkCharacters = () => {
    const characters = JSON.parse(localStorage.getItem("characters"))
    console.log(characters)
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
      element:<Character character={character}/>
    }
  ]);

  return (
    <div id="main">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
