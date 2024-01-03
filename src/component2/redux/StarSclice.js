import { createSlice } from '@reduxjs/toolkit';

const createStarSclice=createSlice({
    name:'starWar',
    initialState:{
        result:[]},
    reducers:{
        fecthData: async (state)=>{
            const response = await fetch(`https://swapi.dev/api/planets/`)
            const result= await response.json()
            state.result.push(result.results)
            console.log(result);
        },
        searchData:(state,action)=>{

        }

    
    }
});
// export  createSlice.
export  default{fetchDta,searchData} = createSlice.actions;
