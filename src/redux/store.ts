import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice";

export const store = configureStore({
    reducer: {
        shopItems: itemReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch