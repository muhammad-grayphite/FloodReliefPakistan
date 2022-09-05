import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import fundraisers_list from './fundraisers_reducer';
import effectedAreas from './effected_areas_reducer'

const reducers = combineReducers({
    fundraisers: fundraisers_list,
    effected_areas: effectedAreas,
});

export default reducers