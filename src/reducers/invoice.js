import {INVOICES_FETCHED, INVOICES_FETCHING} from "../actions/invoice";

export function invoice(state = {
    isFetching: false,
    invoices: []
}, action) {
    switch (action.type) {
        case INVOICES_FETCHING:
            return Object.assign({}, state,{
               isFetching: true,
            });
        case INVOICES_FETCHED:
            return Object.assign({}, state,{
                isFetching: false,
                invoices: action.data.invoices,
            });
        default:
            return state
    }
}