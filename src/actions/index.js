import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_RATE_EXCHANGE = 'GET_RATE_EXCHANGE';
export const GET_SUPPORTED_CURRENCIES = 'GET_SUPPORTED_CURRENCIES';

export function fetchCountries(){    

    return function(dispatch, getState){
        axios.get('https://api.exchangerate.host/latest').then(axiosResponse=>{
            dispatch({ type: GET_SUPPORTED_CURRENCIES, payload: Object.keys(axiosResponse.data.rates)});
            axios.get('https://restcountries.eu/rest/v2/all').then(axiosResponse=>{
                dispatch({type: GET_COUNTRIES, payload: {countries: axiosResponse.data, supportedCurrencies: getState().supportedCurrencies} } );
            });
        });       
    }   
}


export function fetchRateExchange(country){
    return function (dispatch){
        axios.get(`https://api.exchangerate.host/timeseries?start_date=${getLastMonth()}&end_date=${formatedDate(new Date())}&base=USD&symbols=${country.currencyCode}`)
        .then(axiosResponse=>{
            dispatch({
                type:GET_RATE_EXCHANGE,
                payload: {rates: axiosResponse.data.rates, ...country}
            });
        });
    };
}

function formatedDate(date){
    return date.toISOString().split('T')[0];
}

function getLastMonth(){
    let now = new Date();
    now.setMonth(now.getMonth() - 1);

    return formatedDate(now);

}