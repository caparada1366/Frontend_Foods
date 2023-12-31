import axios from 'axios'

//Acción que trae las recetas de la api y la BD
export function getRecipes(){
    var link1 = '/recipes'
    return async (dispatch) =>{
        try{
        const data = (await axios.get(link1)).data
        dispatch({
            type: 'GET_RECIPES',
            payload: data
        })  
        }catch(error){
            alert("se han agotado los request al api, intente mañana nuevamente")
        }
    }
}

//Acción que trae las dietas de la API y la BD
export function getDiets(){
    var link2 = '/diets'
    return async (dispatch) =>{
        try{
        const data = (await axios.get(link2)).data
        dispatch({
            type: 'GET_DIETS',
            payload: data
        }) 
    }catch(err){} 
    }
}


//Acción que filtra por origen de la receta si es API o BD
export function filtrarOrigen(origen){
    return {
        type: 'FILTRO_ORIGEN',
        payload: origen
    }
}

//Acción que filtra recetas por dietas seleccionadas 
export function filtrarDieta(dietas){
    return {
        type: 'FILTRO_DIETAS',
        payload: dietas
    }
}

//Accion que ordena alfabeticamente las recetas 
export function ordenarAlfa(orden){
    return {
        type: 'ORDEN_ALFA',
        payload: orden
    }
}

//Acción que ordena por Health Score las recetas
export function ordenarHealthScore(orden){
    return {
        type: 'ORDEN_HS',
        payload: orden
    }
}

//Acción que borra los filtros y deja las recetas que se tenían desde el principio 
export function quitarFiltros(){
    return {
        type: 'QUITAR_FILTROS',
    }
}

//Acción para volver al default y borrar los resultados de la busqueda
export function borrarBusqueda(){
    return{
        type: 'BORRAR_BUSQUEDA'
    }
}

//Acción para avanzar de página 
export function nextPage(){
    return {
        type: 'NEXT_PAGE'
    }
}

//Acción para retroceder de página 
export function prevPage(){
    return {
        type: 'PREV_PAGE'
    }
}

//Acción para ir a la página seleccionada
export function irPage(pagina){
    return{
        type: 'IR_PAGE',
        payload: pagina
    }
}

//Acción para buscar receta
export function searchRecipe(name){
    return async (dispatch) =>{
        const data = (await axios.get(`/recipes?name=${name}`)).data
        
        dispatch({
            type: 'SEARCH_RECIPE',
            payload: data
        })  
    }
}
export function cargar(){
    return{
        type: 'CARGAR',
        payload: true
    }
}
