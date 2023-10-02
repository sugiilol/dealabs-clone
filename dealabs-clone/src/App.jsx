import './App.css'
import Navbar from './Components/Navbar/Navbar'
import DealCard from './Components/DealCard/DealCard'

function App() {


  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>
      <div className='section-product'>
        <DealCard />
      </div>
      <footer>

      </footer>
    </div>
  )
}

export default App
