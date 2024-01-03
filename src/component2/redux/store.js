import { configureStore,  } from '@reduxjs/toolkit';
import StarSclice from './StarSclice';

export const store = configureStore({
    // Create the reducer and add it here
    
    reducer: {
            star:StarSclice
    }
    
})
