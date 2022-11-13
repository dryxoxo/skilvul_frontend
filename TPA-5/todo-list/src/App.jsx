import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Todo from './pages/Todo'
import All from './components/All'
import Completed from './components/Completed'
import NotYet from './components/NotYet'
import InputTodo from './components/InputTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<InputTodo/>}>
        <Route path='all' element={<All/>}/>
        <Route path='completed' element={<Completed/>}/>
        <Route path='notyet' element={<NotYet/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
