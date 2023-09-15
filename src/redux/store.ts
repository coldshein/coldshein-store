import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";
import burgerReducer from "./burgerSlice";

export const store = configureStore({
    reducer: {
        shopItems: itemReducer,
        cartItems: cartReducer,
        burgerItems: burgerReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch