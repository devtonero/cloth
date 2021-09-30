import CartAct from "./cart.types";

import { addItemToCart } from "./cart.utilis";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []

};
const cartReducer = (state =  INITIAL_STATE, action) => {
    switch (action.type) {
        case CartAct.TOGGLE_CART:
            return{
                ...state,
                hidden: !state.hidden
            };

            case CartAct.ADD_ITEMS:
                return {
                    ...state,
                    cartItems: addItemToCart (state.cartItems, action.payload)
                };

        default: 
        return state;


    }

};
export default cartReducer;