import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";
import cartReducer from "./cartSlice";
import burgerReducer from "./burgerSlice";
import { storeApi } from "./API";

export const store = configureStore({
    reducer: {
        shopItems: itemReducer,
        cartItems: cartReducer,
        burgerItems: burgerReducer,
        [storeApi.reducerPath]: storeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch