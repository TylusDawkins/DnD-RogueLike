import './inventorymodal.css'
import type { Character, Reward, ItemEffect } from '../../types'

interface InventoryModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    character: Character;
    setCharacter: (char: Character) => void;
    saveCharacter: () => void;
}

function InventoryModal({ isOpen, setIsOpen, character, setCharacter, saveCharacter }: InventoryModalProps) {

    const removeItem = (item: Reward) => {
        const characterCopy = { ...character }
        characterCopy.inventory = [...characterCopy.inventory]
        characterCopy.inventory.splice(characterCopy.inventory.indexOf(item), 1)
        setCharacter(characterCopy)
        saveCharacter()
    }

    const closeModal = () => {
        setIsOpen(!isOpen)
    }

    return isOpen ? (
        <div className="inventory-modal">
            <div style={{ fontSize: '4em', marginTop: '20px', marginBottom: '20px' }}>Inventory</div>
            <div className="close-modal" onClick={closeModal}>X</div>
            <div className='inventory'>
                {character.inventory.map((item) => (
                    <div className='item' key={crypto.randomUUID()}>
                        <div onClick={() => { removeItem(item) }}>
                            X
                        </div>
                        <div style={{ fontWeight: "bold" }}>
                            {item.name}
                        </div>
                        <div>
                            type: {item.type}
                        </div>
                        <div>
                            <div>Properties:{item.properties}</div>

                            Effects: {item.effects.map((effect: ItemEffect, i: number) => {
                                const displayEffect = { ...effect };
                                if (displayEffect.special) {
                                    displayEffect.description = displayEffect.special;
                                }

                                return (
                                    <div key={i}>
                                        <div>{displayEffect.name}</div>
                                        <div>{displayEffect.description.replaceAll("{modifier}", String(item.tier))}</div>
                                    </div>
                                )
                            })}

                        </div>
                        {item.damage ? <div>{item.damage}</div> : null}
                        {item.AC ? <div>{item.AC}</div> : null}
                        <div>Tier: {item.tier}</div>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}

export default InventoryModal
