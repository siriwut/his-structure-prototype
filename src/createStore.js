import { createStore as createReduxStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { connectRouter, routerMiddleware } from 'connected-react-router'


export default function createStore({ initialState = {}, history } = {}) {
  const middleware = [
    routerMiddleware(history)
  ]

  return createReduxStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
      composeWithDevTools(),
      applyMiddleware(...middleware)
    )
  )
}
