import React, {useState} from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'
import { Link } from 'react-router-dom'
import Filtros from '../FIltros/Filtros';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import cooking from '../LandingPage/cooking.png'

export default function NavBar() {

  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };
  

  return (
    <div className='navbar'>
      <Link to='/'><img src={cooking} style={{width: '3.5vw', height: '6vh', paddingLeft: '3vw', paddingTop: '1vh'}}></img></Link>
        <div>
        <Link to='/home' style={{textDecoration: 'none', paddingLeft: '5vw', justifySelf: 'self-start'}}><a>Home</a></Link>
        <Link to='/form' style={{textDecoration: 'none', paddingLeft: '5vw', justifySelf: 'self-start'}}><a>Crear receta</a></Link>
        </div>
        <SearchBar></SearchBar>
        <div className= 'dropdown' style={{paddingLeft: '11.5vw'}}>
          <a onClick={toggleFilterMenu}><FontAwesomeIcon icon={faBars} />Filtros</a>
          {showFilterMenu &&(
            <div className='dropdown-content'><Filtros/></div>
  
          )}
        </div>
    </div>
  )
}
