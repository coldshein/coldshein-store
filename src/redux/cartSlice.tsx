import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";



interface cartItem  {
    price: string,
    id: string,
    title: string,
    size: string,
    brand: string,
    imageUrl: string[],
    count?: number,
    addedDate: string,
}
interface cartState {
    openCart: boolean,
    closeCart: boolean,
    items: cartItem[],
    totalPrice: number;
}

const initialState: cartState = {
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
        addItem: (state, action: PayloadAction<cartItem>) => {
            state.items.push({
                ...action.payload,
            })
        },
        removeItem: (state, action: PayloadAction<string>) =>{
            state.items = state.items.filter((item) => item.addedDate !== action.payload )
        } 
    }
})

export const { setOpenCart, setCloseCart, addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;