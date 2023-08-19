import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface cartState {
    openCart: boolean,
    closeCart: boolean,
    items: [],
    totalPrice: number;
}

const initialState: cartState= {
    openCart: false,
    closeCart: false,
    items: [],
    totalPrice: 0,
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
        },
        addItem: (state, action: PayloadAction) => {
            // const findItem = state.items.find((item) => item.id === action.payload.id)
            // if(findItem){
            //     findItem.count++;
            // } else {
            //     state.items.push({
            //         ...action.payload,
            //         count: 1,
            //     })
            // }
        }
    }
})

export const { setOpenCart, setCloseCart} = cartSlice.actions;
export default cartSlice.reducer;