import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './features/cartSlice.js';
import userReducer from './features/userSlice.js';

export const store = configureStore({
    reducer: {
        cartState: cartReducer,
        userState: userReducer,
    }
})