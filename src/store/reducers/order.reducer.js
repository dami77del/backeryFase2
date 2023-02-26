import { DELETE_ORDER, GET_ORDERS } from "../actions/order.action";

const initialState ={
    list: [],
}

const orderReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                list: action.payload,
            }
            case DELETE_ORDER:
                console.log("La lista es: ", action.orderId)
            return{
                ...state,
                list: state.list.filter(item => item.id !== action.orderId),
            }
        default: 
        return state    
    }
}

export default orderReducer