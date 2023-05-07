import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SingleCard } from 'components/SingleCard'
import { Navbar } from './components/Navbar'
import { List } from './components/List'
import { StartingPage } from './components/StartingPage'

export const App = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-container">
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/all-cards" element={<List endpoint="all-cards" />} />
          <Route path="/major-arcana" element={<List endpoint="major-arcana" />} />
          <Route path="/minor-arcana" element={<List endpoint="minor-arcana" />} />
          <Route path="/single-card/:suit/:number" element={<SingleCard />} />
        </Routes>
      </main>

    </BrowserRouter>

  )
}
