import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { searchRecipe, borrarBusqueda, cargar } from '../../Redux/actions';
import { useNavigate} from 'react-router-dom'
import './NavBar.css'


export default function SearchBar() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

  const [receta, setReceta] = useState("");

  function handleChange(event){
     setReceta(event.target.value);
  }
  function handlePressEnter(event){
     if(event.keyCode ===13){
        handleClickSearch(receta)
     }
  }

  function handleClickSearch(e){
   dispatch(cargar())
   dispatch(searchRecipe(receta))
   navigate('/home')
  }

  function handleClickBorrar(e){
   dispatch(borrarBusqueda())
   setReceta("");
  }

  return (
    <div className='searchbar'>
        <input onChange={handleChange} onKeyDown={handlePressEnter} value={receta} placeholder='Busqueda receta'></input>
        <a onClick={handleClickSearch}>Buscar Receta</a>
        <a onClick={handleClickBorrar}>Borrar busqueda</a>
    </div>
  )
}
