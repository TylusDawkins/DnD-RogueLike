import './inventorymodal.css'

function InventoryModal({ isOpen, setIsOpen, character, setCharacter, saveCharacter }) {

    const removeItem = (item) => {
        const characterCopy = { ...character }
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
                            Effects: {JSON.stringify(item.effects)}
                        </div>
                        {item.damage ? <div>{item.damage}</div> : null}
                        {item.ac ? <div>{item.ac}</div> : null}
                        <div>Tier: {item.tier}</div>
                    </div>
                ))}
            </div>
        </div>
    ) : null
}

export default InventoryModal
