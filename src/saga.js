import { all, call, takeEvery } from 'redux-saga/effects'
import createSaga from 'createSaga'
import checkoutSaga from 'features/checkout/sagas'

import { types } from 'features/checkout/reducers/flightInformationReducer'

function* testCross() {
  console.log('test cross')
}

const crossSaga = createSaga([
  takeEvery('CROSS', testCross)
])

export default createSaga([
  call(checkoutSaga),
  call(crossSaga)
])
