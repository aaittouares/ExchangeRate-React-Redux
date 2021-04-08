import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';
import ReducerRateExchange from './reducer_rate_exchange';
import ReducerSupportedCurrencies from './reducer_supported_currencies';

const rootReducer = combineReducers({
  countries: ReducerCountries,
  rateExchangeList: ReducerRateExchange,
  supportedCurrencies: ReducerSupportedCurrencies
});

export default rootReducer;
