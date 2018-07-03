import { call } from 'redux-saga/effects'
import createSaga from 'createSaga'

import checkoutSaga from './checkoutSaga'

export default createSaga([
  call(checkoutSaga)
])
