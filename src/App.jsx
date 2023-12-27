import Class from './components/class/Class'
import classes from './data/classesJson'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {

  return (
    <div id="main">
      <div id="header">
        <div>Choose Your Character!</div>
      </div>
      <div id="classes">
          {classes.map((classObj,i) => {
            return(
              <Class 
                image={classObj.image}
                name={classObj.name}
                description={classObj.description}
                key={i}
                href={`/character/${classObj.name}`}
              />)
          })}
        </div>
    </div>
  )
}

export default App
