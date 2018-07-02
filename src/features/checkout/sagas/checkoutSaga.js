import { all, takeEvery } from 'redux-saga/effects'
import createSaga from 'createSaga'

import { types } from '../reducers/flightInformationReducer'


export function* loadFlightInformation(action) {
  yield
}

export default function* saga(action) {
  console.log('---hello--')
  yield takeEvery('*', function* (action) { console.log(action) })
  yield takeEvery(
    types.LOAD_FLIGHT_INFORMATION,
    function* () { console.log('hello') }
  )
}
