// store.js
import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './sclice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
