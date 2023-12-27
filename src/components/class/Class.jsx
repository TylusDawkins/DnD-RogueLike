import './class.css'

function Class({image, description, name, href}) {

    return (
        <div className="card" >
            <div className="card-name">{name}</div>
            <img src={image} className="card-image" alt={name+"image"} />
            <div className="card-description">
                <p>{description}</p>
            </div>
        </div>
    )
  }
  
  export default Class
  