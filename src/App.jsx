import React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TestPage from './components/TestPage'
import MediumPage from './components/MediumPage'
import VcPage from './components/VcPage'
import VcFeedPage from './components/VcFeedPage'

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="bg-gray-100 p-4">
          <div className="container mx-auto flex gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Test Page</Link>
            <Link to="/medium" className="text-blue-600 hover:text-blue-800">Medium Page</Link>
            <Link to="/vc" className="text-blue-600 hover:text-blue-800">VC.ru Page</Link>
            <Link to="/vc-feed" className="text-blue-600 hover:text-blue-800">VC.ru Feed</Link>
          </div>
        </nav>
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<TestPage />} />
          <Route path="/medium" element={<MediumPage />} />
          <Route path="/vc" element={<VcPage />} />
          <Route path="/vc-feed" element={<VcFeedPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
