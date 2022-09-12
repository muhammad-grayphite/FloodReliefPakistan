import { call, takeEvery, put, all } from "redux-saga/effects";

import { fundraisers_Saga } from "./fundraiser_saga";
import { effectedAreas_Saga } from './effected_areas_saga'




export default function* rootSaga() {
    yield all([...fundraisers_Saga, ...effectedAreas_Saga]);
}