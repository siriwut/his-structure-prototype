import { all, takeEvery, put } from 'redux-saga/effects'
import createSaga from 'createSaga'

import { types } from '../reducers/flightInformationReducer'


export function* loadFlightInformation(action) {
  console.log('---load flight---')
  yield put({ type: 'TEST_TAPE' })
}


export function* test(action) {
  console.log(action)

    yield put({ type: 'CROSS' })
}

export default createSaga([
  takeEvery(types.LOAD_FLIGHT_INFORMATION, loadFlightInformation),
  takeEvery('TEST_TAPE', test)
])
