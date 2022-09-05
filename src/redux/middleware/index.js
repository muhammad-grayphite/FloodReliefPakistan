import { call, takeEvery, put, all } from "redux-saga/effects";

import { fundraisers_Saga } from "./fundraiser_saga";



export default function* rootSaga() {
    yield all([...fundraisers_Saga]);
}