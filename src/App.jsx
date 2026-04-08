import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#333'
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
    }
  }

  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path='/' element={<TextArea mode={mode} />} />
        <Route path='/about' element={<About mode={mode} />} />
        <Route path='/contact' element={<Contact mode={mode} />} />
      </Routes>
    </Router>
  )

}

export default App
