import { takeEvery } from 'redux-saga/effects'
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { all } from 'redux-saga/effects'

import rootReducer from './reducer'
import rootSaga from './saga'

import { types } from 'features/checkout/reducers/flightInformationReducer'

const sagaMiddleware = createSagaMiddleware()

export default function createStore({ initialState = {}, history } = {}) {

  const middleware = [
    routerMiddleware(history),
    sagaMiddleware,
  ]

  const store = createReduxStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      applyMiddleware(...middleware),
      composeWithDevTools(),
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
