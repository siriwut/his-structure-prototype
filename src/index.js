import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import createStore from './createStore'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import App from './App'

const history = createBrowserHistory()
const store = createStore({ history })

ReactDOM.render(
  <StoreProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </StoreProvider>,
  document.getElementById('root')
)
registerServiceWorker()
