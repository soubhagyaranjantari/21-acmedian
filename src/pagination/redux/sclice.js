// slices/itemsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ITEMS_PER_PAGE = 10;

// Create an async thunk for fetching paginated items
export const fetchPaginatedItems = createAsyncThunk('items/fetchPaginatedItems', async (currentPage) => {
  const response = await fetch(`http://localhost:5000/api/items?limit=${ITEMS_PER_PAGE}&offset=${(currentPage - 1) * ITEMS_PER_PAGE}`);
  const data = await response.json();
  return { items: data.items, totalPages: Math.ceil(data.totalItems / ITEMS_PER_PAGE) };
});

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    currentPage: 1,
    totalPages: 1,
    status: 'idle',
    error: null,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaginatedItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPaginatedItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchPaginatedItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = itemsSlice.actions;

export default itemsSlice.reducer;
