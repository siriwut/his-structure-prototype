import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouteWithSubRoutes from 'components/RouteWithSubRoutes/RouteWithSubRoutes'
import routes from 'routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/checkout">Checkout</Link>
        </nav>
        <main>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </main>
      </div>
    );
  }
}

export default App
