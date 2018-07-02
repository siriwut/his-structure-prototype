export const types = {
  PAID: 'checkout/payment/PAID',
  PAID_SUCCESS: 'checkout/payment/PAID_SUCCESS',
  PAID_FAIL: 'checkout/payment/PAID_FAIL',
}


export default function reducer(state = {}, action) {
  switch (action.type) {
    case types.PAID:
      return state
    case types.PAID_SUCCESS:
      return state
    case types.PAID_FAIL:
      return state
    default:
    return state
  }
}

export const actions = {
  paid: () => ({
    type: types.PAID,
  }),

  paidSuccess: (info = {}) => ({
    type: types.PAID_SUCCESS,
    payload: {
      flightInformation: info
    }
  }),

  paidFail: (error = {}) => ({
    type: types.PAID_FAIL,
    payload: {
      error
    }
  }),
}
