import { all, call } from 'redux-saga/effects'
import createSaga from 'createSaga'

import checkoutSaga from 'features/checkout/sagas'

export default function* saga() {
  yield all([
    ...checkoutSaga
  ])
}
