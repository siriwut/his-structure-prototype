import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

export default function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}
