import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starPlanet: [],
    fillterData: [],
    loading: false,
    error: null
};

const starWarSlice = createSlice({
    name: 'starWar',
    initialState,
    reducers: {
        fetchStarWarDataStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchStarWarDataSuccess: (state, action) => {
            console.log('in reducer data', action.payload);
            state.starPlanet = action.payload;
            state.loading = false;
            console.log(state.starPlanet);
        },
        fetchStarWarDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        searchData: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            // Create a new state object with the filtered starPlanet
            return {
                ...state,
                fillterData: state?.starPlanet.filter((planet) =>
                    planet.name.toLowerCase().includes(searchTerm)
                ),
            };
        }
    }
});

export const { fetchStarWarDataStart, fetchStarWarDataSuccess, fetchStarWarDataFailure } = starWarSlice.actions;

export const fetchStarWarData = (searchTerm = '') => async (dispatch) => {
    try {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const response = await fetch(`https://swapi.dev/api/planets/`, { signal });
        //   https://swapi.dev/api/people/?search=Obi
        const result = await response.json();
        console.log("============", result.results);
        dispatch(fetchStarWarDataSuccess(result.results));
        
    } catch (error) {
        console.error(error);
        console.log("========ERROR====", error);
        dispatch(fetchStarWarDataFailure(error.message));
    }
};

export default starWarSlice.reducer;
