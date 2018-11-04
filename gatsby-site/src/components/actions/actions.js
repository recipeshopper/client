export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

let itemID = 0;

export const addItem = (number, value) => {
    return {
        type: ADD_ITEM,
        id: itemID++ ,
        item: value,
        quantity: number
    }
}

export const deleter = (ingredient) => {
    return {
        type: DELETE_ITEM,
        payload: ingredient
    }
}