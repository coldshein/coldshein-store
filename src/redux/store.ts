import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        shopItems: itemReducer,
        cartItems: cartReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch