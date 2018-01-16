import * as types from './constants';
import axios from 'axios';



export const usersActions = {
  fetchCoins
};

function fetchCoins() {
  return (dispatch, getState) => {
    dispatch(request());
    axios.get('http://coincap.io/front')
      .then(function (response) {
        console.log(response);
        var coins = response.data.slice(0, 20);
        dispatch(success(coins));
      })
      .catch(function (error) {
        console.log(error);

      });
  };
  function success(coins) {

    return { type: types.COINS_SUCCESS, coins }
  }
  function request(coins) { return { type: types.COINS_REQUEST, coins } };;
}