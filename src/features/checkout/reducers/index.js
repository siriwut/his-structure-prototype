import { combineReducers } from 'redux'
import flightInformationReducer from './flightInformationReducer'
import paymentReducer from './paymentReducer'

export default combineReducers({
  flightInformation: flightInformationReducer,
  payment: paymentReducer
})
