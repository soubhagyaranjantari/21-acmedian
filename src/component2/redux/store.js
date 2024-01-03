import { configureStore,  } from '@reduxjs/toolkit';
import starWarsSlice from './Sclice'
export const store = configureStore({
    // Create the reducer and add it here
    
    reducer: {
            star:starWarsSlice
    }
    
})
// export default {fecthdata,searchData}=store.dispatch;