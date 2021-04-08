import { GET_SUPPORTED_CURRENCIES } from '../actions';

const initialState = [];

export default function (state = initialState, action){
    switch(action.type){
        case GET_SUPPORTED_CURRENCIES: 
            return filterSupportedCountries(action.payload);
        default: 
            return state;
    }
}

function filterSupportedCountries(data){
    return data.filter( currency => {
        return currency !== "USD";
    });
}