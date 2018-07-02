import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouteWithSubRoutes from 'components/RouteWithSubRoutes/RouteWithSubRoutes'
import './HomeView.css'

export default class CheckoutView extends Component {
  render() {
    const { routes } = this.props

    return (
      <div>
        <ul className="navigation-bar" >
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </div>
    )
  }
}
