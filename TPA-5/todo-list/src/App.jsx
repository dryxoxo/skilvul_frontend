import { useState } from 'react'
import Layout from './components/Layout'
import Todo from './pages/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo/>
    </>
  )
}

export default App
