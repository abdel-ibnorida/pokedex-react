import './App.css'
import Cards from './Components/Cards'
import Navbar from './Components/Navbar'
import { createContext, useContext } from 'react'
export const UserContext = createContext();

function App() {
  
  return (
    <UserContext.Provider value = {'utente loggato'}>
    <Navbar/>
    <Cards/>
    pokedex
    </UserContext.Provider>
  )
}

export default App
