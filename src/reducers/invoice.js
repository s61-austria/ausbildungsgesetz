import {INVOICE_GENERATING, INVOICE_REGENERATED, INVOICES_FETCHED, INVOICES_FETCHING} from "../actions/invoice";

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
        case INVOICE_GENERATING:
            return Object.assign({}, state,{
                isFetching: true,
            });
        case INVOICE_REGENERATED:
            return Object.assign({}, state, {
                isFetching: false,
                invoices: state.invoices.map(inv => inv.id === action.data.id ? action.data : inv)
            })
        default:
            return state
    }
}