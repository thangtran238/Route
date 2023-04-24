import React,{useState} from 'react'

export default function Bai5() {
  const [car,setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    color: 'Black',
    year: 1964
  })
  const handleColor = () => {
    setCar(e => {
      return {...e,color:"blue"}
    }
  )}
    
    
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>It is a {car.color} {car.model} from {car.year}</p> 
      <button onClick={handleColor}>Change Color</button>
    </div>
    
  )
}
