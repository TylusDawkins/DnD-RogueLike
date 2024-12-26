import './inventorymodal.css'

function InventoryModal({ isOpen, setIsOpen, character, setCharacter, saveCharacter }) {

    const removeItem = (item) => {
        const characterCopy = { ...character }
        const itemToRemove = characterCopy.inventory.find((el) => { el['id'] = item['id'] })
        characterCopy.inventory.splice(itemToRemove, 1)
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
                    <div className='item' key={item.name}>
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
                            Special: {item.special}
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
