import React from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='navbar'>
        <div>
        <Link to='/home' style={{textDecoration: 'none', paddingLeft: '70px', justifySelf: 'self-start'}}><a>Home</a></Link>
        <Link to='/form' style={{textDecoration: 'none', paddingLeft: '70px', justifySelf: 'self-start'}}><a>Crear receta</a></Link>
        </div>
        <SearchBar></SearchBar>
        <a style={{ paddingLeft: '270px'}}>Filtros</a>
    </div>
  )
}
