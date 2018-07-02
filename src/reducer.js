import { combineReducers } from 'redux'
import checkoutReducer from 'features/checkout/reducers'

export default combineReducers({
  checkout: checkoutReducer
})
