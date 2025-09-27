import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NotePage from './pages/NotePage'

const App = () => {
  return (
    <div data-theme='luxury' className='min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/note/:id' element={<NotePage />} />
        </Routes>
    </div>
  )
}

export default App