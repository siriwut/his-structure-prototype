import React, { Component } from 'react'
import { containers } from 'features/checkout/flight-information'

const { FlightInformationContainer } = containers

export default class FlightInformationView extends Component {
  render() {
    return <FlightInformationContainer />
  }
}
