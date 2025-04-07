import React, { useState } from 'react'
import './App.css'

function App() {
  const [showStats, setShowStats] = useState(false)

  const handleCalculate = () => {
    setShowStats(true)
  }

  return (
    <div className="hero-container">
      {/* Floating Mini Logo */}
      <img src="/logo-gambl.png" alt="GAMBL Mini Logo" className="floating-logo" />

      <div className="overlay">
        {/* Glowing Main Logo Wrap */}
        <div className="logo-glow-wrap">
          <img src="/logo-gambl.png" alt="GAMBL Logo" className="logo-top" />
        </div>

        {/* Headings */}
        <h1 className="title">GAMBL</h1>
        <h2 className="tagline">Machine Learned. Game Driven.</h2>

        {/* Input Area */}
        <div className="input-box">
          <label htmlFor="player">Select Player</label>
          <select id="player">
            <option>LeBron James</option>
            <option>Jayson Tatum</option>
            <option>Luka Dončić</option>
          </select>
          <button onClick={handleCalculate}>Calculate</button>
        </div>

        {/* AI Output */}
        {showStats && (
          <div className="output-box animate-suggestion">
            <div className="stat-line">
              <span><strong>PTS:</strong> 28.3</span>
              <span><strong>REB:</strong> 9.7</span>
              <span><strong>AST:</strong> 7.5</span>
              <span className="ai-bet"><strong>AI Bet:</strong> 🔥 Good Bet</span>
            </div>
          </div>
        )}

        {/* Pricing Tiers */}
        <div className="pricing">
          <p><strong>Free:</strong> Last 2 games only</p>
          <p><strong>Basic:</strong> $20/mo – Full game stats</p>
          <p><strong>Premium:</strong> AI picks, models, and edge analysis</p>
        </div>
      </div>
    </div>
  )
}

export default App
