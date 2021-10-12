import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { parseStringIntoSnakeCase } from './utils/string'
import { TextField } from '@mui/material'
import AlertComponent from './components/Alert'

function App() {
  const [word, setWord] = useState('')

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          <TextField
            label='To Snake Case Word'
            onChange={(e) => setWord(e.target.value)}
            variant='filled'
          />
          <h1>To Snake Case</h1>
          <h2>{parseStringIntoSnakeCase(word)}</h2>
        </p>
        <AlertComponent word={word} />
      </header>
    </div>
  )
}

export default App
