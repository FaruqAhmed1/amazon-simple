import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='APP'>

      <Header></Header>


    </div>
  )
}

export default App
