export const types = {
  LOAD_FLIGHT_INFORMATION: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION',
  LOAD_FLIGHT_INFORMATION_SUCCESS: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION_SUCCESS',
  LOAD_FLIGHT_INFORMATION_FAIL: 'checkout/flightInformation/LOAD_FLIGHT_INFORMATION_FAIL',
  ADD_FLIGHT_INFORMATION: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION',
  ADD_FLIGHT_INFORMATION_SUCCESS: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION_SUCCESS',
  ADD_FLIGHT_INFORMATION_FAIL: 'checkout/flightInformation/ADD_FLIGHT_INFORMATION_FAIL',

  LOAD_COUNTRIES: 'checkout/flightInformation/LOAD_COUNTRIES',
  LOAD_COUNTRIES_SUCCESS: 'checkout/flightInformation/LOAD_COUNTRIES_SUCCESS',
  LOAD_COUNTRIES_FAIL: 'checkout/flightInformation/LOAD_COUNTRIES_FAIL',
}


export const initialState = {
  countries: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FLIGHT_INFORMATION:
      return {
        ...state,
        loading: true,
      }
    case types.LOAD_FLIGHT_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload.countries
      }
    case types.LOAD_FLIGHT_INFORMATION_FAIL:
      return {
        ...state,
        loading: false
      }
    case types.ADD_FLIGHT_INFORMATION:
      return {
        ...state,
        loading: true,
      }
    case types.ADD_FLIGHT_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: false,
        flightInformation: action.payload.flightInformation
      }
    case types.ADD_FLIGHT_INFORMATION_FAIL:
      return {
        ...state,
        loading: false
      }
    case types.LOAD_COUNTRIES:
      return {
        ...state,
        loading: true,
      }
    case types.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload.countries
      }
    case types.LOAD_COUNTRIES_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}

export const actions = {
  loadFlightInformation: () => ({
    type: types.LOAD_FLIGHT_INFORMATION,
  }),

  loadFlightInformationSuccess: (flightInformation = {}) => ({
    type: types.LOAD_FLIGHT_INFORMATION_SUCCESS,
    payload: {
      flightInformation
    }
  }),

  loadFlightInformationFail: (error = {}) => ({
    type: types.LOAD_FLIGHT_INFORMATION_FAIL,
    payload: {
      error
    }
  }),

  addFlightInformation: (flightInformation) => ({
    type: types.ADD_FLIGHT_INFORMATION,
    payload: {
      flightInformation
    }
  }),

  addFlightInformationSuccess: (flightInformation) => ({
    type: types.ADD_FLIGHT_INFORMATION_SUCCESS,
    payload: {
      flightInformation
    }
  }),

  addFlightInformationFail: (error = {}) => ({
    type: types.ADD_FLIGHT_INFORMATION_FAIL,
    payload: {
      error
    }
  }),

  loadCountries: () => ({
    type: types.LOAD_COUNTRIES,
  }),

  loadCountriesSuccess: (countries = []) => ({
    type: types.LOAD_COUNTRIES_SUCCESS,
    payload: {
      countries
    }
  }),

  loadCountriesFail: (error = {}) => ({
    type: types.LOAD_COUNTRIES_FAIL,
    payload: {
      error
    }
  }),
}
