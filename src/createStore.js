import { takeEvery } from 'redux-saga/effects'
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from './reducer'
import rootSaga from './saga'

import { types } from 'features/checkout/reducers/flightInformationReducer'

const sagaMiddleware = createSagaMiddleware()

export default function createStore({ initialState = {}, history } = {}) {

  const middleware = [
    sagaMiddleware,
    routerMiddleware(history),
  ]

  const store = createReduxStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(...middleware),
      composeWithDevTools(),
    )
  )

  sagaMiddleware.run(function* saga (action) {
    console.log(action)
    console.log('--222--')
    return yield
    // return yield takeEvery(types.LOAD_FLIGHT_INFORMATION, function* (action) {
    //   console.log('--$$$$--')
    // })
  })

  return store
}
