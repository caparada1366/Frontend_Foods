import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'

export default function Cards({image, name, diets, id, healthScore}) {
  return (
    <Link to={`/detail/${id}`} style={{textDecoration: 'none'}}>
    <div className='cards'>
      <h2>Nombre: {name}</h2>
      <img className='img' src={image} alt={name} style={{width: '17vw', height:'25vh'}}></img>
      <h4>Dietas: {diets.join(", ")}</h4>
      <h3>Health Score: {healthScore}</h3>
    </div>
    </Link>
  )
}
