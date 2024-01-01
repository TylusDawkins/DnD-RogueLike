import './class.css'
import { useNavigate } from 'react-router-dom'




function Class({image, description, name, href}) {

    const navigate = useNavigate();

    return (
        <div className="card" onClick={()=>{navigate(`character/${name}`)}} style={{overflow:"clip"}}>
            <div className="card-name">{name}</div>
            <img src={image} className="card-image" alt={name+"image"} />
            <div className="card-description" style={{color:'black', WebkitTextFillColor:''}}>
                <p style={{color:'black', WebkitTextFillColor:''}}>{description}</p>
            </div>
        </div>
    )
  }
  
  export default Class
  