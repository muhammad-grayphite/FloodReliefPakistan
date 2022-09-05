import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import fundraisers_list from './fundraisers_reducer';

const reducers = combineReducers({
    fundraisers: fundraisers_list,

});

export default reducers