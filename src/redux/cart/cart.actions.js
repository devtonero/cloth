import CartAct from "./cart.types";

export const toggleCart = () => ({
    type: CartAct.TOGGLE_CART,
    
});

export const addItem = item => ({
    type: CartAct.ADD_ITEMS,
    payload: item
});