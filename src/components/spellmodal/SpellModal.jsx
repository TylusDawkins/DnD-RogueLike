import { useState, useEffect } from "react"
import "./spellmodal.css"
import '../../../src/globals.css'
import spells from "../../data/spells.json"



function SpellModal({isOpen, setIsOpen, playerSpells, setPlayerSpells, playerLevel, type}) {

    const [spellChoices, setSpellChoices] = useState([])

    let availableSpells

    const getAvailableSpells = () => {
        if(type === "halfcaster"){
            if(playerLevel < 5){
                availableSpells = spells.filter(x => x.level === 1)
            }else if(playerLevel < 9){
                availableSpells = spells.filter(x => x.level <= 2)
            }else if(playerLevel < 13){
                availableSpells = spells.filter(x => x.level <= 3)
            }else if(playerLevel < 17){
                availableSpells = spells.filter(x => x.level <= 4)
            }
        }
        else if(type === "mage"){
            availableSpells = spells.filter(x => x.level <= (Math.round(playerLevel/2)))
        }
    }

    useEffect(() => {
        getRandomChoices()
    },[isOpen])

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const getRandomChoices = () => {
        let i = 0
        let randoSpell
        let choices = []
        getAvailableSpells()
        while(i < 6){
          randoSpell = availableSpells[Math.floor(Math.random() * availableSpells.length)]
          if (choices.includes(randoSpell) || playerSpells.includes(randoSpell)){
            continue
          } else{
            choices.push(randoSpell)
            i++
          }
        }
        setSpellChoices(choices)
      }

      const chooseSpell = (spell) => {
        setPlayerSpells([...playerSpells, spell])
      }

      const handleClick = (spell) => {
        chooseSpell(spell)
        closeModal()
      }

    return isOpen ? (
        <div id="spell-choice-modal">
            {spellChoices.map((spell,i) => {
                return (
                    <div className="spell-choice-modal-content" key={i}>
                        <div className="spell-choice-name" style={{fontWeight:'700'}}>{spell.name}</div>
                        <div className="spell-choice-desc" style={{fontSize:".9em", overflow:"auto"}}>{spell.description} {spell.higherLevel}</div>
                        {/* <div className="spell-choice-higher-level" style={{fontSize:".75em", overflow:"auto"}}> </div> */}
                        <div className="spell-choice-tier">Tier: {spell.level}</div>
                        <button className="spell-choice-btn" onClick={() => {handleClick(spell)}}>Choose</button>
                    </div>
                )
            })}
        </div>
    ) : null
}
  
  export default SpellModal