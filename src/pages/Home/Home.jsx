import Class from '@components/class/Class'
import classes from '@utils/classesJson'
import './Home.css'
import '/src/globals.css'
import charSelectorIcon from "@assets/char_selector_icon.png"
import CharSelectorModal from "@components/CharacterSelectorModal/CharacterSelectorModal"
import { useState } from 'react'


function Home({characters, setCharacters}) {


  const [isCharSelectorModalOpen, setIsCharSelectorModalOpen] = useState(false)

  return (
    <div id="main">
      <CharSelectorModal
        isOpen={isCharSelectorModalOpen}
        setIsOpen={setIsCharSelectorModalOpen}
        characters={characters}
        setCharacters={setCharacters}
      />
      <img
        src={charSelectorIcon}
        style={{ position: "fixed", height: "10em", width: "10em" }}
        className='charSelectorIcon'
        onClick={() => {setIsCharSelectorModalOpen(!isCharSelectorModalOpen)}}
      />
      <div id="header" className='text'>
        <div>Choose Your Character!</div>
      </div>
      <div id="classes">
        {classes.map((classObj, i) => {
          return (
            <Class
              image={classObj.image}
              name={classObj.name}
              description={classObj.description}
              key={i}
              href={classObj.href}
            />)
        })}
      </div>
    </div>
  )
}

export default Home
