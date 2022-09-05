import { takeLatest, takeEvery, fork, call, put } from "redux-saga/effects";
import { getEffectedAreas, setEffectedAreas } from "../reducers/effected_areas_reducer";
import { effected_area_sheet_link, options } from "../../networkCall/endPoints";
import { fetchData } from "../../networkCall";


let callAPI = async () => {

    const result = await fetchData(effected_area_sheet_link, options)
    return result
};

function* onLoadList() {

    const resposne = yield call(callAPI)
    resposne?.values?.shift()
    yield put(setEffectedAreas({ list: resposne }))


}

function* onLoadFundRaisersList() {
    yield takeLatest(getEffectedAreas.type, onLoadList)
}


export const effectedAreas_Saga = [fork(onLoadFundRaisersList)]


