
import './App.css'
import { Home } from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addemp from './pages/Addemp'
import Navbar from './Components/Navbar'
import Updateemp from './pages/Updateemp'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addemployee" element={<Addemp/>} />
      <Route path="/update/:id" element={<Updateemp/>} />
    </Routes>
    </BrowserRouter>

    
    

    </>
  )
}

export default App
