export const types = {
  PAID: 'checkout/payment/PAID',
  PAID_SUCCESS: 'checkout/payment/PAID_SUCCESS',
  PAID_FAIL: 'checkout/payment/PAID_FAIL',
}

const initialState = {
  cardId: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.PAID:
      return {
        ...state,
        loading: true
      }
    case types.PAID_SUCCESS:
      return {
        ...state,
        loading: false,
        cardId: action.payload.cardId
      }
    case types.PAID_FAIL:
      return {
        ...state,
        loading: false
      }
    default:
    return state
  }
}

export const actions = {
  paid: (cardInfo = {}) => ({
    type: types.PAID,
    payload: {
      cardInfo: {
        number: cardInfo.number
      }
    }
  }),

  paidSuccess: (cardId) => ({
    type: types.PAID_SUCCESS,
    payload: {
      cardId
    }
  }),

  paidFail: (error = {}) => ({
    type: types.PAID_FAIL,
    payload: {
      error
    }
  }),
}
