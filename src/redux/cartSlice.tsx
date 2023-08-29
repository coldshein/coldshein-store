import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

interface cartItem {
  price: number;
  id: string;
  title: string;
  size: string;
  brand: string;
  imageUrl: string[];
  count: number;
  addedDate: string;
}

interface cartState {
  openCart: boolean;
  closeCart: boolean;
  items: cartItem[];
  totalPrice: number;
}

const initialState: cartState = {
  openCart: false,
  closeCart: false,
  items: [],
  totalPrice: 0,
};

export const postCartItem = createAsyncThunk<cartItem, AnyAction>(
  "cartItems/postCartItem",
  async (addedItem, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:3001/cart`,
        addedItem
      );
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const removeCartItem = createAsyncThunk<string | void, string>(
  "cartItems/removeCartItem",
  async (id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3001/cart/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCartItems = createAsyncThunk<cartItem[] | void>(
  "cartItems/fetchCartItems",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/cart");
      dispatch(setItems(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    setOpenCart: (state) => {
      state.openCart = true;
    },
    setCloseCart: (state) => {
      state.openCart = false;
    },
    addItem: (state, action: PayloadAction<cartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count += 1;
      }
      state.items.push({
        ...action.payload,
        count: 1,
      });
      state.totalPrice = state.items.reduce((sum, obj) => {
        return (obj.price * obj.count) + sum;
     }, 0)
    },
    setItems: (state, action: PayloadAction<cartItem[]>) => {
      state.items = action.payload;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setOpenCart, setCloseCart, addItem, removeItem, setItems } =
  cartSlice.actions;
export default cartSlice.reducer;
