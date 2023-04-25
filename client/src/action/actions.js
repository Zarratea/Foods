import axios from 'axios';


export const GET_RECIPES='GET_RECIPES'
export const GET_RECIPES_BY_ID='GET_RECIPES_BY_ID'
export const GET_DIETS='GET_DIETS'
export const POST_FORM='POST_FORM'
export const FILTER_BY_DIETS='FILTER_BY_DIET'
export const GET_NAME='GET_NAME'
export const FILTER_CREATE='FILTER_CREATE'
export const ORDER_BY_NAME='ORDER_BY_NAME'
export const ORDER_BY_SALUDABLE='ORDER_BY_SALUDABLE'

export const getRecipes = () => {
    return async function(dispatch){
        var json=await axios.get('http://localhost:3001/recipes');
        return dispatch({
            type:GET_RECIPES,
            payload:json.data,
        });
    }
  };

export const getRecipesById = (id) => {
    return async function(dispatch){
      try {
        var json=await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({
            type:GET_RECIPES_BY_ID,
            payload:json.data,
        })
      } catch (error) {
        console.log(error);     
      }
    }
  };

export const getName = (payload) => {
    return async function(dispatch){
      try {
        var json=await axios.get('http://localhost:3001/recipes?name='+payload);
        return dispatch({
            type:GET_NAME,
            payload:json.data,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  
export const filterRecipesByDiets = (payload) => {
      return {
        type:FILTER_BY_DIETS, 
        payload
      }
    };

export const filterCreate = (payload) => {
      return {
        type:FILTER_CREATE, 
        payload
      }
    };

export const orderName = (payload) => {
      return {
        type:ORDER_BY_NAME, 
        payload
      }
    };

export const orderSaludable = (payload) => {
      return {
        type:ORDER_BY_SALUDABLE, 
        payload
      }
    };

export const getDiets = () => {
      return async function(dispatch){
        var json=await axios.get('http://localhost:3001/diets');
        return dispatch({
            type:GET_DIETS,
            payload:json.data,
        });
    }
  };

export const postForm = (payload) => {
      return async function(dispatch){
        var json=await axios.post('http://localhost:3001/recipes',payload);
        return dispatch({
            type:POST_FORM,
            payload:json,
        });
    }
  };


