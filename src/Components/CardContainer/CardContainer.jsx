import React, { useEffect , useState} from 'react'
import Cards from '../Cards/Cards'
import {useSelector, useDispatch} from 'react-redux'
import { getRecipes, getDiets  } from '../../Redux/actions';
import Filtros from '../FIltros/Filtros';
import './CardContainer.css'
import Paginado from '../Paginado/Paginado';
import Loading from '../Loading/Loading';

export default function CardContainer() {
  const {recipes, pagActual, loadingHome} = useSelector((state)=>state);
  
  const dispatch = useDispatch();


 

  let desde = (pagActual -1)*9
  let hasta = (pagActual* 9)
  let cantPages = Math.ceil(recipes.length /9)
  let recipesPages = recipes?.slice(desde, hasta)

  


  return (
    <div className='containterFull'>
          {loadingHome ? (
            <div className='loading'>
            <Loading/>
            </div>
          ):(<div className='container'>
          <div className='card_container'>
          {
            recipesPages && recipesPages.map((recipe)=>{
              return <Cards
              id={recipe.id}
              image = {recipe.image}
              name = {recipe.name}
              diets = {recipe.diets}
              healthScore = {recipe.health_Score}>
              </Cards>
            })
            } 
          </div>
           </div> )}
        <div className='paginado'>
          <Paginado cantPages={cantPages}/>
        </div>
      </div>
  )
}
