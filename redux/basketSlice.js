import { createSlice } from '@reduxjs/toolkit';
let rdf = 0;
export const basketSlice = createSlice({
    name: 'baskets',
    initialState: {
        basketList: [],
    },
    reducers: {
        addBasket: (state, action) => {
            console.warn('state action addBasket:');
            console.warn(state);
            console.warn(action);
            state.basketList = [...state.basketList, { rdf: rdf++, basket: action.payload.basket }];
        },
        deleteBasket: (state, action) => {
            state.basketList = [...state.basketList.filter(basket => basket.rdf != action.payload)];
        },
    }
});
export const { addBasket, deleteBasket } = basketSlice.actions;
export const selectBaskets = state => state.basketList;
export default basketSlice.reducer;
