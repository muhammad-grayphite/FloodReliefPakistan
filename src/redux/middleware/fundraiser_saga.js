import { takeLatest, takeEvery, fork, call, put } from "redux-saga/effects";
import { getFundraisers, setFundraisers } from "../reducers/fundraisers_reducer";
import { fundraisers_sheet_link, options } from "../../networkCall/endPoints";
import { fetchData } from "../../networkCall";


let callAPI = async () => {

    const result = await fetchData(fundraisers_sheet_link, options)
    return result
};

function* onLoadList() {

    const resposne = yield call(callAPI)
    resposne?.values?.shift()
    yield put(setFundraisers({ list: resposne }))


}

function* onLoadFundRaisersList() {
    yield takeLatest(getFundraisers.type, onLoadList)
}


export const fundraisers_Saga = [fork(onLoadFundRaisersList)]


