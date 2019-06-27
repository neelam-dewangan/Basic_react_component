export const cartReducer = (cartState = [], action) => {
    switch(action.type) {
        case "ADD_TO_CART" : 
            const tempCartState = [...cartState];
            tempCartState.push(action.product);
            return tempCartState
        case "DELETE_CART" :
            const tempRemove = [...cartState];
            tempRemove.splice(action.index, 1)
            return tempRemove;
        default: return cartState;
    }
}