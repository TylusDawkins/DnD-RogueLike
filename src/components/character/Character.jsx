import './class.css'

function Character({image, description, name, features}) {

    return (
        <div className="character">
            <div className="character-name">{name}</div>
            <img src={image} className="character-image" alt={name+"image"} />
            <div className="character-description">
                <p>{description}</p>
            </div>
        </div>
    )
  }
  
  export default Character