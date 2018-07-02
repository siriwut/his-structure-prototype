import { combineReducers } from 'redux'
import flightInformationReducer, * as flightInformation from './flightInformationReducer'
import paymentReducer, * as payment from './paymentReducer'

export { flightInformation }
export { payment }

export default combineReducers({
  flightInformation: flightInformationReducer,
  payment: paymentReducer
})
