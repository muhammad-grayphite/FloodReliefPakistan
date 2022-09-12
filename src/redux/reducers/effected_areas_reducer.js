import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'effected_areas',
    initialState: {
        effected_areas_list: [],
        loading: false,
    },
    reducers: {
        getEffectedAreas: (state, actions) => {
            state.loading = true
        },

        setEffectedAreas: (state, { payload: { list } }) => {
            state.effected_areas_list = list,
                state.loading = false
        },

    },
});

export const { getEffectedAreas, setEffectedAreas } = slice.actions;

export default slice.reducer;

