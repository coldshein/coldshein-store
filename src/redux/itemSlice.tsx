import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export type ItemType = {
  id: number;
  title: string;
  sex: string;
  price: string;
  brand: string;
  size: string[];
  imageUrl: string[];
  link: string;
  type: string;
  category: string;
}

export interface ItemState {
  items: ItemType[];
  loading: "pending" | "fulfilled" | "rejected";
  searchValue: string;
}

const initialState: ItemState = {
  items: [],
  loading: "pending",
  searchValue: "",
};


export const fetchShopItems = createAsyncThunk<ItemType[], string | void>(
  "items/fetchShopItems",
  async (query, { dispatch }) => {
    try {
      const url = query
        ? `https://650464d5c8869921ae24f99f.mockapi.io/items?title=${query}`
        : `https://650464d5c8869921ae24f99f.mockapi.io/items`;
      const { data } = await axios.get(url);
      dispatch(setItems(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchCollections = createAsyncThunk<ItemType[], string | void>(
  "items/fetchShopItems",
  async (designer, { dispatch }) => {
    try {
      const url = `https://650464d5c8869921ae24f99f.mockapi.io/items?link=${designer}`;
      const { data } = await axios.get(url);
      dispatch(setItems(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchSexCollections = createAsyncThunk<
ItemType[],
  { sex?: string; category?: string }
>("items/fetchSexCollections", async ({ sex, category }, { dispatch }) => {
  try {
    const url = category
      ? `https://650464d5c8869921ae24f99f.mockapi.io/items?sex=${sex}&category=${category}`
      : `https://650464d5c8869921ae24f99f.mockapi.io/items?sex=${sex}`;
    const { data } = await axios.get(url);
    dispatch(setItems(data));
    return data;
  } catch (error) {}
});

export const fetchCategoryCollections = createAsyncThunk<ItemType[], string | void>(
  "items/fetchCategoryCollections",
  async (category, { dispatch }) => {
    try {
      const url = `https://650464d5c8869921ae24f99f.mockapi.io/items?category=${category}`;
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
    setItems: (state, action: PayloadAction<ItemType[]>) => {
      state.items = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopItems.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(
      fetchShopItems.fulfilled,
      (state, action: PayloadAction<ItemType[]>) => {
        state.loading = "fulfilled";
        state.items = action.payload;
      }
    );
  },
});

export const { setItems, setSearchValue } = itemSlice.actions;
export default itemSlice.reducer;