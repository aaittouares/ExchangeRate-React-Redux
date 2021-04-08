import { GET_COUNTRIES } from '../actions';

const initialState = [];

export default function (state = initialState, action){
    switch(action.type){
        case GET_COUNTRIES: 
            return getCountriesInfo(action.payload);
        default: 
            return state;
    }
}

function getCountriesInfo(data){

    return data.countries.map(country=>{
        return {
            name: country.name,
            currencyCode: country.currencies[0].code,
            flag: country.flag,
            code: country.alpha3Code
        }
    }).filter( country => {
        return data.supportedCurrencies.indexOf(country.currencyCode) > -1; 
    });

}