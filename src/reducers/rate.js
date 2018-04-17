import {
    RATE_FETCHING,
    RATE_FETCH_FAILED,
    RATE_FETCHED,
    RATE_UPDATED_ERROR,
    RATE_UPDATED_PENDING,
    RATE_UPDATED_SUCCESS
} from "../actions/rate";

export function rate(state = {
    isFetching: false,
    isFailed: false,
    rates: []
}, action) {
    switch (action.type) {
        case RATE_FETCHING:
            return Object.assign({}, state,{
                isFetching: true,
                isFailed: false,
                isUpdated: false,
                isUpdateFailed: false,
            });
        case RATE_FETCHED:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false,
                isUpdated: false,
                isUpdateFailed: false,
                rates: action.data.rates,
            });
        case RATE_FETCH_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
                isUpdated: false,
                isUpdateFailed: false,
            });
        case RATE_UPDATED_PENDING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
                isUpdated: false,
                isUpdateFailed: false,
            });
        case RATE_UPDATED_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                isUpdated: true,
                isUpdateFailed: false,
                rates: state.rates.map(rate => rate.uuid === action.data.uuid ? action.data : rate)
            });
        case RATE_UPDATED_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                isUpdated: false,
                isUpdateFailed: true,
            })
        default:
            return state
    }
}