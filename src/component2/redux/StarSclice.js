import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    starPlanet: [],
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
            console.log('in reducer data',action.payload);
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
              starPlanet: state?.starPlanet.filter((planet) =>
                planet.name.toLowerCase().includes(searchTerm)
              ),
            };
          }
    }
});

export const { fetchStarWarDataStart, fetchStarWarDataSuccess, fetchStarWarDataFailure, searchData } = starWarSlice.actions;

// export const fetchStarWarData = () => async (dispatch) => {
//     try {
//         dispatch(fetchStarWarDataStart());

//         const response = await fetch('https://swapi.dev/api/planets/');
//         const result = await response.json();
//         console.log(result);
//         dispatch(fetchStarWarDataSuccess(result));
//     } catch (error) {
//         console.error(error);
//         dispatch(fetchStarWarDataFailure(error.message));
//     }
// };
export const fetchStarWarData = (searchTerm = '') => async (dispatch) => {
    try {
      const response = await fetch(`https://swapi.dev/api/planets/?search=${searchTerm}`);
      const result = await response.json();
      dispatch(fetchStarWarDataSuccess(result.results));
    } catch (error) {
      console.error(error);
      dispatch(fetchStarWarDataFailure(error.message));
    }
  };

export default starWarSlice.reducer;
