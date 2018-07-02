export const types = {
  LOAD_FLIGHT_INFORMATION: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION',
  LOAD_FLIGHT_INFORMATION_SUCCESS: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION_SUCCESS',
  LOAD_FLIGHT_INFORMATION_FAIL: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION_FAIL',
  ADD_FLIGHT_INFORMATION: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION',
  ADD_FLIGHT_INFORMATION_SUCCESS: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION_SUCCESS',
  ADD_FLIGHT_INFORMATION_FAIL: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION_FAIL'
}


export default function reducer(state = {}, action) {
  switch (action.type) {
    case types.LOAD_FLIGHT_INFORMATION:
      console.log('hello')
      return state
    case types.LOAD_FLIGHT_INFORMATION_SUCCESS:
      return state
    case types.LOAD_FLIGHT_INFORMATION_FAIL:
      return state
    case types.ADD_FLIGHT_INFORMATION:
      return state
    case types.ADD_FLIGHT_INFORMATION_SUCCESS:
      return state
    case types.ADD_FLIGHT_INFORMATION_FAIL:
      return state
    default:
    return state
  }
}

export const actions = {
  loadFlightInformation: () => ({
    type: types.LOAD_FLIGHT_INFORMATION,
  }),

  loadFlightInformationSuccess: (info = {}) => ({
    type: types.LOAD_FLIGHT_INFORMATION_SUCCESS,
    payload: {
      flightInformation: info
    }
  }),

  loadFlightInformationFail: (error = {}) => ({
    type: types.LOAD_FLIGHT_INFORMATION_FAIL,
    payload: {
      error
    }
  }),

  addFlightInformation: () => ({
    type: types.ADD_FLIGHT_INFORMATION,
  }),

  addFlightInformationSuccess: (info = {}) => ({
    type: types.ADD_FLIGHT_INFORMATION_SUCCESS,
    payload: {
      flightInformation: info
    }
  }),

  addFlightInformationFail: (error = {}) => ({
    type: types.ADD_FLIGHT_INFORMATION_FAIL,
    payload: {
      error
    }
  })
}
