import { useState } from 'react'
import './App.css'

function App() {
  const [phrase, setPhrase] = useState("Escriba y vea la magia")

  const handleInput = event => {
    event.preventDefault()
    // console.log(event.target[0].value)
    setPhrase( event.target[0].value )
  }

  return (
    <div className="App">

      <h1>Ejercicio 2 - React useContext</h1>

      <form onSubmit={ handleInput }>
        <div>
          <input placeholder='Escriba aquí' type="text" />
        </div>

        <button>Enviar</button>
      </form>

      <h2>{ phrase }</h2>

    </div>
  )
}

export default App
