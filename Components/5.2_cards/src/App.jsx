import './App.css'
import CarsData from './assets/data/cardsData.js'
import Card from './components/Card.jsx'

function App() {
  

  return (
    <div className='cards-container' id='cards-id'>{
      CarsData.map((car) => {
        return (
          <Card key={car.id} car={car} />
        )
      })
    }
    </div>
  )
}

export default App
