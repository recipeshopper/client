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
