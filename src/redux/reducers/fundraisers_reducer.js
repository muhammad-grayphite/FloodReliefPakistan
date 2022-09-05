import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'fundraisers_list',
    initialState: { fundraisers_list: [] },
    reducers: {
        set_fundraisers_list: (state, { payload: { list } }) => {
            state.fundraisers_list = list
        },

    },
});

export const { set_fundraisers_list } = slice.actions;

export default slice.reducer;

export const get_fundraisers_list = state => {
    return state.fundraisers_list;
};
