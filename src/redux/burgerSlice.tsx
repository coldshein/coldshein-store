import { createSlice } from "@reduxjs/toolkit";

interface IBurger {
    openBurger: boolean;
}

const initialState: IBurger = {
    openBurger: false
}

export const burgerSlice = createSlice({
    name: "burgerItems",
    initialState,
    reducers: {
        setOpenBurger: (state, action) => {
            state.openBurger = action.payload
        }
    }

})
export const {setOpenBurger} = burgerSlice.actions;
export default burgerSlice.reducer;