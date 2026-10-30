import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
