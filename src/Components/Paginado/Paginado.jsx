import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextPage, prevPage, irPage, cargar } from '../../Redux/actions';
import './Paginado.css'

export default function Paginado({cantPages}) {
    const {pagActual} = useSelector((state)=>state);
    const dispatch = useDispatch();

    function nextP(){
        dispatch(cargar());
        dispatch(nextPage());
    }

    function prevP(){
      dispatch(cargar());
        dispatch(prevPage());
    }

    function irPag(p){
      dispatch(cargar());
      dispatch(irPage(p))
    }

  return (
    
      <div className='paginado'>
          {pagActual > 1 ? (
          <div>
            <a className='item' onClick={prevP}>PREV</a>
            {pagActual>2 ?(
               <a className='item' onClick={()=>irPag(pagActual-2)}>  {pagActual -2}  </a>
            ):null}
            <a onClick={()=>irPag(pagActual-1)}>  {pagActual -1}  </a>
            
          </div>
        ) : null}
        <div>
        <a className='item' style={{color: 'rgb(240, 248, 255)'}} onClick={()=>irPag(pagActual)}>  {pagActual}  </a>
        </div>
        {pagActual < cantPages ? (
          <div>
            <div>
            <a className='item' onClick={()=>irPag(pagActual+1)}>  {pagActual +1}  </a>
            {pagActual< cantPages-1 ?(
               <a  className='item'onClick={()=>irPag(pagActual+2)}>  {pagActual +2}  </a>
            ):null}
            <a className='item' onClick={nextP}>NEXT</a>
            </div>
          </div>
        ) : null}
      </div>
    
  )
}
