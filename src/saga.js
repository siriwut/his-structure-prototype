import { all, call, takeEvery } from 'redux-saga/effects'
import createSaga from 'createSaga'
import checkoutSaga from 'features/checkout/sagas'

import { types } from 'features/checkout/reducers/flightInformationReducer'

export default createSaga([
  call(checkoutSaga),
])
