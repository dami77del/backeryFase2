import { URL_API } from "../../constants/Database";

export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const CONFIRM_CART = 'CONFIRM_CART'

export const addItem = item=>({
    type:ADD_ITEM,
    item,

})

export const removeItem = itemId =>({
    type:REMOVE_ITEM,
    itemId,
})

export const confirCart = () =>({
    type:CONFIRM_CART,
    payload,
})