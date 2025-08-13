import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TestPage from './components/TestPage'
import MediumPage from './components/MediumPage'
import VcPage from './components/VcPage'
import VcPageOpen from './components/VcPageOpen'
import VcFeedPage from './components/VcFeedPage'
import Top10Page from './components/Top10Page'
import AITicker from './components/ui/AITicker'

function App() {
  return (
    <Router>
      <div>
        {/* AI Models Ticker */}
        <AITicker />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/medium" element={<MediumPage />} />
          <Route path="/vc" element={<VcPage />} />
          <Route path="/vc-open" element={<VcPageOpen />} />
          <Route path="/vc-feed" element={<VcFeedPage />} />
          <Route path="/top10" element={<Top10Page />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
