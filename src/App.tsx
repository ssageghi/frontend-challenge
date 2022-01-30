import './App.scss'
import TrendContainer from './components/TrendContainer'
import { MainState } from './context/MainState'
function App() {

  return (
    <MainState>
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
    </MainState>
  )
}

export default App
