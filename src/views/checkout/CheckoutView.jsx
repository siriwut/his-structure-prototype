import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouteWithSubRoutes from 'components/RouteWithSubRoutes/RouteWithSubRoutes'
import './CheckoutView.css'

export default class CheckoutView extends Component {
  render() {
    const { routes } = this.props


    return (
      <div>
        <h2>{ 'Checkout View' }</h2>
        <ul className="navigation-bar" >
          <li>
            <Link to="/checkout/flight-information">Flight Information</Link>
          </li>
          <li>
            <Link to="/checkout/payment">Payment</Link>
          </li>
          <li>
            <Link to="/checkout/complete">Complete</Link>
          </li>
        </ul>
        <section>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </section>
      </div>
    )
  }
}
