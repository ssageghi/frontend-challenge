import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import TrendContainer from './components/TrendContainer'
function App() {

  return (
    <div className="App">
      <header className='header'>
        <h1>Trending</h1>
        <h3>
          See what the GitHub community is most excited about today.

        </h3>
      </header>
      <main>
        <TrendContainer />
      </main>
    </div>
  )
}

export default App
