import { useState } from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <ItemListContainer mensaje="¡Bienvenido a Sport!" />
    </>
  )
}

export default App
