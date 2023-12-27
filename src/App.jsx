import Class from './components/class/Class'
import classes from './data/classesJson'
import './App.css'

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
                href={classObj.href}
              />)
          })}
        </div>
    </div>
  )
}

export default App
