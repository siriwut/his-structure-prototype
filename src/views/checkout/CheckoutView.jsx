import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Button } from 'antd'

import RouteWithSubRoutes from 'components/RouteWithSubRoutes/RouteWithSubRoutes'
import { flightInformation } from 'features/checkout/reducers'
import './CheckoutView.css'

const { actions } = flightInformation

const mapStateToProps = null
const mapDispatchToProps = dispatch => bindActionCreators({
  loadFlightInformation: actions.loadFlightInformation
}, dispatch)

class CheckoutView extends Component {
  componentDidMount() {
    const { loadFlightInformation } = this.props
    console.log('----')
    loadFlightInformation()
  }

  render() {
    const { routes } = this.props

    return (
      <div>
        <div>
          <Button onClick={ () => this.props.loadFlightInformation() } >Enter</Button>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutView)
