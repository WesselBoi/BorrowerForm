import { useState } from 'react'
import './App.css'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import BorrowForm from './pages/BorrowForm'
import Register from './pages/Register'
import Login from './pages/Login'
import FormSuccess from './pages/FormSuccess'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/borrow" element={<BorrowForm />} />
        <Route path="/formSuccess" element={<FormSuccess />} />
        {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route> */}
      </Routes>
    </>
  )
}

export default App
