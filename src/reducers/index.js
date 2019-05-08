import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';
import ReducerRateExchange from './reducer_rate_exchange';

const rootReducer = combineReducers({
  countries: ReducerCountries,
  rateExchangeList: ReducerRateExchange
});

export default rootReducer;
