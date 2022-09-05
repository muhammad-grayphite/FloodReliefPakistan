import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'fundraisers',
    initialState: {
        fundraisers_list: [],
        loading: false,
    },
    reducers: {
        getFundraisers: (state, actions) => {
            state.loading = true
        },

        setFundraisers: (state, { payload: { list } }) => {
            state.fundraisers_list = list,
                state.loading = false
        },

    },
});

export const { getFundraisers, setFundraisers } = slice.actions;

export default slice.reducer;


