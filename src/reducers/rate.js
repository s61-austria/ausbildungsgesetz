import {RATE_FETCHED, RATE_FETCHING} from "../actions/rate";

export function rate(state = {
    isFetching: false,
    rates: []
}, action) {
    switch (action.type) {
        case RATE_FETCHING:
            return Object.assign({}, state,{
               isFetching: true,
            });
        case RATE_FETCHED:
            return Object.assign({}, state,{
                isFetching: false,
                rates: action.data.rates,
            });
        default:
            return state
    }
}