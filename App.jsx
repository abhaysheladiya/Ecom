import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() { 
  return (
    <div className="App"> 
    <BrowserRouter>
       <Nav />
       <Routes>
          <Route path="/" element={<h1> product listening component</h1>}></Route>
          <Route path="/add" element={<h1> Add product</h1>}></Route>
          <Route path="/update" element={<h1> update listening component</h1>}></Route>
          <Route path="/logout" element={<h1> logout listening component</h1>}></Route>
          <Route path="/profile" element={<h1> profile listening component</h1>}></Route>
          <Route path="/signup" element={<SignUp />} />
       </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App
