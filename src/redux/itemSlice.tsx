import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Item {
  id: number;
  title: string;
  sex: string;
  price: string;
  brand: string;
  size: number[],
  imageUrl: string[];
  link: string;
  type: string;
}

export interface ItemState {
  items: Item[];
  loading: "pending" | "fulfilled" | "rejected";
  searchValue: string;
}

const initialState: ItemState = {
  items: [],
  loading: "pending",
  searchValue: "",
};

export const fetchShopItems = createAsyncThunk<Item[], string | void>(
  "items/fetchShopItems",
  async (query, { dispatch }) => {
    try {
      const url = query ? `http://localhost:3001/items?q=${query}` : `http://localhost:3001/items`;
      const { data } = await axios.get(url);
      dispatch(setItems(data));
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
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

export const { setItems, setSearchValue } = itemSlice.actions;
export default itemSlice.reducer;

