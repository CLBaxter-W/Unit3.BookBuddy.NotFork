import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Books from './components/Books'
import Navigations from './components/Navigations'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
      <Navigations />
      <Routes>
        <Route path='/' element={<div>Hello</div>} />
        <Route path='/books' element={<Books />} />
      </Routes>
    </>
  )
}

export default App
