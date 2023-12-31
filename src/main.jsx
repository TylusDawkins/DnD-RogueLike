import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import axios from 'axios'
import App from './App.jsx'
import Fighter from './pages/classes/fighter/Fighter.jsx'
import Mage from './pages/classes/mage/Mage.jsx'
import HalfCaster from './pages/classes/halfcaster/HalfCaster.jsx'

import './index.css'

// let spells = []

// const searchSpellUrl = async (spell) => {
//   const response = await axios.get(`https://www.dnd5eapi.co${spell}`)
//   return response
// }

// const getSpells = async () => {
//   const response = await axios.get('https://www.dnd5eapi.co/api/spells')
//   console.log(response)
//   for (const spell of response.data.results){
//     // console.log(spell)
//     const spellInfo = await searchSpellUrl(spell.url)
//     const spellFormated = {
//       name: spellInfo.data.name,
//       description: spellInfo.data.desc,
//       higherLevel: spellInfo.data.higher_level,
//       level: spellInfo.data.level,
//     }
//     spells.push(spellFormated)
//   }
//   console.log(response)
//   console.log(spells)
// }

// getSpells()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "character/fighter",
    element:<Fighter/>
  },
  {
    path: "character/mage",
    element:<Mage/>
  },
  {
    path:"character/half-caster",
    element:<HalfCaster/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);