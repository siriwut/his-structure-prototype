import { all, takeEvery, put } from 'redux-saga/effects'
import createSaga from 'createSaga'

import { types, actions } from '../reducers/flightInformationReducer'

export default createSaga([
  takeEvery(types.LOAD_FLIGHT_INFORMATION, loadFlightInformation),
  takeEvery(types.ADD_FLIGHT_INFORMATION, addFlightInformation),
  takeEvery(types.LOAD_COUNTRIES, loadCountries),
])


export function* loadFlightInformation(action) {
  const countries = [
    { label: 'China', value: 'china' },
    { label: 'U.S.A', value: 'usa' },
    { label: 'Thailand', value: 'thailand' },
    { label: 'Australia', value: 'australia' }
  ]

  yield put(
    actions.loadFlightInformationSuccess({
      countries
    })
  )
}

export function* addFlightInformation(action) {
  const { flightInformation } = action.payload

  yield put(
    actions.addFlightInformationSuccess(flightInformation)
  )
}

export function* paid(action) {
  const { cardInfo } = action.payload

  const cardId = `${cardInfo.number}_success`

  yield put(
    actions.paidSuccess(cardId)
  )
}

export function* loadCountries() {
  const countries = [
    { label: 'China', value: 'china' },
    { label: 'U.S.A', value: 'usa' },
    { label: 'Thailand', value: 'thailand' },
    { label: 'Australia', value: 'australia' }
  ]

  yield put(
    actions.loadCountriesSuccess(countries)
  )
}
