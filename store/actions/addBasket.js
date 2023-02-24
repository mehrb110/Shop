export const ADD_BASKET = "ADD_BASKET"; 

export const addBasket = (id) => {
    return ({ type: ADD_BASKET, productId: id });
}