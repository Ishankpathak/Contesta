import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import { Routes , Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Card/>}/>
      </Routes>
      
    </>
  )
}

export default App
