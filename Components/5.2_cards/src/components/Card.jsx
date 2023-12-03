import './Card.css'

function Card({car}) {
  return (
    <div className='card-container'>
      <h1>{car.title}</h1>
      <p>{car.description}</p>
      <a href={car.link}>For more information visit</a>
      <img className='card-img' src={car.img} alt="img" />

    </div>
  )
}

export default Card