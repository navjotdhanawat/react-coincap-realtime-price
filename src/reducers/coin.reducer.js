
import * as types from '../actions/constants'
const initialState = [];

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COINS_REQUEST:
      return state;
    case types.COINS_SUCCESS:
      return action.coins;
    case types.COINS_FAILURE:
      return state;
    default:
      return state;
  }
}