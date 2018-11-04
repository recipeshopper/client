export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (number, value) => {
    return {
        type: ADD_ITEM,
        value: value,
        amount: number
    }
}

export const deleter = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}