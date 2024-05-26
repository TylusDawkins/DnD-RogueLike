import './spellbook.css'
import spellLimits from '@utils/spellLimits'
import spellCosts from '@utils/spellCosts'

function Class({spells, isOpen, setIsOpen, character, setCharacter}) {

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    const castSpell = (spell) =>{
        const characterCopy = {...character}
        if((character.currentSpellPoints - spellCosts[spell.level] >= 0)){
            // console.log("points available")
            if(spellLimits[spell.level]){
                // console.log("High level spell")
                console.log(typeof character.spellSlotsUsed[spell.level], character.spellSlotsUsed[spell.level])
                console.log(typeof spellLimits[spell.level], spellLimits[spell.level])
                console.log(character.spellSlotsUsed[spell.level], spellLimits[spell.level])
                console.log(character.spellSlotsUsed[spell.level] == spellLimits[spell.level])
                // console.log(spellLimits)
                // console.log(spell.level)
                if(character.spellSlotsUsed[spell.level] >= spellLimits[spell.level]){
                    alert(`You can only use ${spellLimits[spell.level]} spells at that level before resting, please rest.`)
                    return
                }
                // console.log("High Level spell cast!")
                characterCopy.spellSlotsUsed[spell.level] += 1
            }
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
                {spells.map((spell) => (
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
  