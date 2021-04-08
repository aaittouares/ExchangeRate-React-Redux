import {GET_RATE_EXCHANGE} from '../actions';

const initialState = []; 

export default function ( state = initialState, action ){
    switch(action.type){
        case GET_RATE_EXCHANGE:
            return [
                    action.payload,
                    ...state
                ];
        default:
            return state;
    }
}