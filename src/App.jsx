import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'

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
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </>
  )
}

export default App
