import './class.css'
import { useNavigate } from 'react-router-dom'
import type { Character } from '../../types'

interface ClassProps {
    image: string;
    description: string;
    name: string;
    character: Character;
}

function Class({ image, description, name, character }: ClassProps) {
    const navigate = useNavigate();

    return (
        <div className="card" onClick={() => { navigate(`character/${name}/${character.id}`) }} style={{ overflow: "clip" }}>
            <div className="card-name">{name}</div>
            <img src={image} className="card-image" alt={name + "image"} />
            <div className="card-description" style={{ color: 'black', WebkitTextFillColor: '' }}>
                <p style={{ color: 'black', WebkitTextFillColor: '' }}>{description}</p>
            </div>
        </div>
    )
}

export default Class
