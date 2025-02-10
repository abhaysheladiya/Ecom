import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import Login from './components/Login'
import PrivateComponent from './components/PrivateComponent'
import ProductList from './components/ProductList'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct'
function App() { 
  return (
    <div className="App"> 
    <BrowserRouter>
       <Nav />
       <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/" element={<h1> product listening component</h1>} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<h1> update listening component</h1>} />
          <Route path="/logout" element={<h1> logout listening component</h1>} />
          <Route path="/profile" element={<h1> profile listening component</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

       </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App
