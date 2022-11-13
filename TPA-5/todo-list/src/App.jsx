import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Todo from './pages/Todo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Todo />
    </>
  )
}

export default App
