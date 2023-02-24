import { combineReducers, createStore } from 'redux';
import { ProductList } from '../../Data/DataFile';
import { ADD_BASKET } from '../actions/addBasket'
const initialState = {
    initProducts: ProductList,
    counter: 0,
    proInBasket: []
};

const productReducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case "Increase":
    //         const proIdSelected = state.proInBasket.findIndex(i => i.id == action.initProducts)
    //         if (proIdSelected >= 0) {
    //             const selectedProducts = [...selectedProducts];
    //             selectedProducts.splice(proIdSelected, 1);
    //             return{...state, proInBasket: selectedProducts}
    //         }
    //         //const 
    //     default:
    //         return (state);
    //}
    console.log('action: ');
    console.log(action);
    console.log(action.type);
    //console.log(action.counter);
    //state = { ...state, counter: 1 };
    if (action.type === "INCREMENT") {
        return { ...state, counter: state.counter + 1 };
    } else if (action.type === "DECREMENT") {
        return state.counter - 1;
    } else {
        return state;
    }
}
//export default productReducer;
export default combineReducers({
    products: productReducer
  });
