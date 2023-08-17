import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface cartState {
    openCart: boolean,
    closeCart: boolean,
}

const initialState: cartState= {
    openCart: false,
    closeCart: false,
}


export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        setOpenCart: (state) => {
            state.openCart = true;
        },
        setCloseCart: (state) =>{
            state.openCart =  false;
        } 
    }
})

export const { setOpenCart, setCloseCart} = cartSlice.actions;
export default cartSlice.reducer;