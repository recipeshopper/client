import axios from 'axios';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";


let itemID = 0;

export const addItem = (ingredient, amount, unit) => {
    console.log(ingredient, amount, unit)
    return {
        type: ADD_ITEM,
        payload: {ingredient: ingredient, amount: amount, unit: unit}
    }
}

export const deleter = (ingredient) => {
    return {
        type: DELETE_ITEM,
        payload: ingredient
    }
}

export const quantityUpdate = (ingredient, quantity) => {
    return {
        type: UPDATE_QUANTITY,
        payload: quantity,
        ingredient: ingredient,
    }
}

export const login = (username, password) => {
  axios
    .get('https://recipeshopperdb.herokuapp.com/createUser', { username, password })
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err.data);
      console.log(err.failed);
    })
  return {
    type: LOGIN,
  }
}


export const signUp = (username, password) => {
  axios
    .post('https://recipeshopperdb.herokuapp.com/createUser', { username, password })
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
      console.log(err.data);
      console.log(err.failed);
    })
  return {
    type: SIGNUP,
  }
}
