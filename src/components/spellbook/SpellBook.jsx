import './spellbook.css'
import { useNavigate } from 'react-router-dom'
import spellLimits from '@utils/spellLimits'
import spellCosts from '@utils/spellCosts'

function Class({spells, isOpen, setIsOpen, character, setCharacter}) {

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const castSpell = (spell) =>{
        console.log(character.maxSpellPoints)
        console.log(character.currentSpellPoints)
        console.log(spellCosts[spell.level])
        if((character.currentSpellPoints - spellCosts[spell.level] >= 0)){
            const characterCopy = {...character}
            characterCopy.currentSpellPoints -= spellCosts[spell.level]
            setCharacter(characterCopy)
        } else{
            alert("Not enough points")
        }
    }

    return isOpen ?(
        <div className="spell-book-modal">
            <div style={{fontSize:'4em', marginTop:'20px', marginBottom:'20px'}}>Spell Book</div>
            <div className="close-modal" onClick={closeModal}>X</div>
            <div className='spell-book'>
                {spells.map((spell,i) => (
                    <div className='spell' key={spell.name}>
                        <div className="spell-name"  style={{fontSize:'2em', marginBottom:'5px', marginTop:'10px'}}>{spell.name}</div>
                        <div>level:{spell.level}</div>
                        <div className="spell-description" style={{color:'black', WebkitTextFillColor:''}}>
                            <div style={{color:'black'}}>{spell.description}</div>
                        </div>
                        <div className="spell-higherlevel" style={{color:'black', WebkitTextFillColor:''}}>{spell.higherLevel}</div>
                        <button style={{fontSize:"1em", marginTop:"1em"}} onClick={()=>{castSpell(spell)}}>Cast</button>
                    </div>
                ))}
            </div>
        </div>
    ) : null
  }
  
  export default Class
  