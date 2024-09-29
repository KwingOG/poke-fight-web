import { useState } from 'react'
import './App.css'
import StartButton from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenido a PokeFight!</h1>
      <div className="card">
      <StartButton endIcon={<SendIcon />} size="large" color="error" variant="outlined">Start</StartButton>
      </div>
      <p className="read-the-docs">
        Copyright 2024 Kwing productions.
      </p>
    </>
  )
}

export default App
