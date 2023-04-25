import { GET_DIETS, GET_RECIPES_BY_ID } from "../action/actions";
import { GET_RECIPES , FILTER_BY_DIETS, FILTER_CREATE, ORDER_BY_NAME, ORDER_BY_SALUDABLE, GET_NAME, POST_FORM } from "../action/actions";

const initialState = {
    recipes: [],
    allRecipes:[],
    allDiets:[],
    recipesById:[],
  };


  const rootReducer = (state = initialState, action) => {
    switch (action.type) {

      case GET_RECIPES:
        return {
          ...state,
          recipes:action.payload,
          allRecipes:action.payload,
        };

      case GET_RECIPES_BY_ID:
        return {
          ...state,
          recipesById:action.payload,
        };

      case FILTER_BY_DIETS:
        const allRecipes=state.allRecipes;
        const filterDiets=action.payload === 'all'? allRecipes : allRecipes.filter(el =>el.diets.includes(action.payload) );
        return {
          ...state,
          recipes:filterDiets
        };

      case FILTER_CREATE:
        const filterCreate=action.payload === 'Mis Recetas'? state.allRecipes.filter(el => el.createInDb) : state.allRecipes.filter(el => !el.createInDb);
        return {
          ...state,
          recipes:action.payload === 'all'? state.allRecipes : filterCreate,
        }

      case ORDER_BY_NAME:
        let order=action.payload ==='Asendente'? 
        state.recipes.sort(function (a,b){
          if (a.name > b.name) {
              return 1
          }
          if (b.name > a.name) {
              return -1
          }
          return 0
        }) :
        state.recipes.sort(function (a,b){
          if (a.name > b.name) {
              return -1
          }
          if (b.name > a.name) {
              return 1
          }
          return 0
        })
        return{
          ...state,
          recipes:order,
        }

      case ORDER_BY_SALUDABLE:
          let order2=action.payload ==='Mas Sano'? 
          state.recipes.sort(function (a,b){
            if (a.health_score > b.health_score) {
                return 1
            }
            if (b.health_score > a.health_score) {
                return -1
            }
            return 0
          }) :
          state.recipes.sort(function (a,b){
            if (a.health_score > b.health_score) {
                return -1
            }
            if (b.health_score > a.health_score) {
                return 1
            }
            return 0
          })
          return{
            ...state,
            recipes:order2,
        }
          
      case GET_NAME:
        return {
          ...state,
          recipes:action.payload,
        };

      case POST_FORM:
        return {
          ...state,
        };

      case GET_DIETS:
        return {
          ...state,
          allDiets:action.payload
        };

      
      default:
        return state;
    }
  };
  
  export default rootReducer;