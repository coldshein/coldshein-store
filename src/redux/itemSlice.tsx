import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export enum Sex {
  Male = "male",
  Female = "female",
  Unisex = "unisex",
}

export interface Item {
  id: number;
  title: string;
  sex: Sex;
  price: string;
  brand: string;
  size: number[],
  imageUrl: string[];
  link: string;
}

export interface ItemState {
  items: Item[];
  loading: "pending" | "fulfilled" | "rejected";
}

const initialState: ItemState = {
  items: [],
  loading: "pending",
};

export const fetchShopItems = createAsyncThunk<Item[]>(
  "items/fetchShopItems",
  async (_, { dispatch }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/items");
      dispatch(setItems(data));
      console.log(data)
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const itemSlice = createSlice({
  name: "shopItem",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopItems.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchShopItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
      state.loading = "fulfilled";
      state.items = action.payload;
    });
  },
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
