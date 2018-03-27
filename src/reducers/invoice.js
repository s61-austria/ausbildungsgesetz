import {INVOICES_FETCH_FAILED, INVOICES_FETCHED, INVOICES_FETCHING} from "../actions/invoice";

export function invoice(state = {
    isFetching: false,
    isFailed: false,
    invoices: []
}, action) {
    switch (action.type) {
        case INVOICES_FETCHING:
            return Object.assign({}, state,{
               isFetching: true,
                isFailed: false,
            });
        case INVOICES_FETCHED:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false,
                invoices: action.data.invoices,
            });
        case INVOICES_FETCH_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            });
        default:
            return state
    }
}