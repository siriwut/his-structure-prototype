import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import RouteWithSubRoutes from 'components/common/RouteWithSubRoutes'
import routes from 'routes'
import 'antd/dist/antd.css'

import './App.css'

import HomeView from 'views/home/HomeView'
import CheckoutView from 'views/checkout/CheckoutView'
import CompleteView from 'views/checkout/CompleteView'
import PaymentView from 'views/checkout/PaymentView'
import FlightInformationView from 'views/checkout/FlightInformationView'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <nav>
          <Link to="/checkout">Checkout</Link>
        </nav> */}
        <main>
          {routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })}
        </main>
      </div>
    );
  }
}

export default App
