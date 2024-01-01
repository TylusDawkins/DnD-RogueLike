import './spellbook.css'
import { useNavigate } from 'react-router-dom'




function Class({spells, isOpen, setIsOpen}) {

    const navigate = useNavigate();

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    return isOpen ?(
        <div className="spell-book-modal">
            <div style={{fontSize:'4em', marginTop:'20px', marginBottom:'20px'}}>Spell Book</div>
            <div className="close-modal" onClick={closeModal}>X</div>
            <div className='spell-book'>
                {spells.map(spell => (
                    <div>
                        <div className="spell-name"  style={{fontSize:'2em', marginBottom:'5px', marginTop:'10px'}}>{spell.name}</div>
                        <div>level:{spell.level}</div>
                        <div className="spell-description" style={{color:'black', WebkitTextFillColor:''}}>
                            <div style={{color:'black'}}>{spell.description}</div>
                        </div>
                        <div className="spell-higherlevel" style={{color:'black', WebkitTextFillColor:''}}>{spell.higherLevel}</div>
                    </div>
                ))}
            </div>
        </div>
    ) : null
  }
  
  export default Class
  