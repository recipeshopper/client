import { createStore as reduxCreateStore } from "redux"

const initialState = {
  groceries: 
      [{ amount: 2, ingredient: 'all-purpose flour', unit: 'cups', price: 5 },
      { amount: 0.5, ingredient: 'baking soda', unit: 'teaspoon', price: 5 },
      { amount: 0.5, ingredient: 'salt', unit: 'teaspoon', price: 5 },
      { amount: 4.5, ingredient: 'unsalted butter, melted', unit: 'cup', price: 5 },
      { amount: 1, ingredient: 'packed brown sugar', unit: 'cup', price: 5 },
      { amount: 0.5, ingredient: 'white sugar', unit: 'cup', price: 5 },
      { amount: 1, ingredient: 'vanilla extract', unit: 'tablespoon', price: 5 },
      { amount: 3, ingredient: 'egg', price: 5 },
      { amount: 2, ingredient: 'egg yolk', price: 5 },
      { amount: 1, ingredient: 'semisweet chocolate chips', unit: 'cups', price: 5 }]  
}



const reducer = (state=initialState, action) => {
  switch(action.type){

    case "ADD_ITEM":
      return Object.assign(
        {}, state, {
          groceries: [
            ...state.groceries, action.payload
          ]
        }
      )

    case "DELETE_ITEM":
        const deleteMap = state.groceries.filter(
          item => (item.ingredient !== action.payload)
        )
        return { groceries: deleteMap }
    
    case "UPDATE_QUANTITY":
        const newArray = [...state.groceries]
        const updatedArray = newArray.forEach(item=>{
            if (item.ingredient === action.ingredient) {
                return {...item, amount: action.payload}
            } else {return item}
        })
        return { groceries: updatedArray }

    default:
      return state
  }
}


const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
