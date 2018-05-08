import {
    INVOICE_FETCHED_FOR_VEHICLE,
    INVOICE_GENERATE_FAILED,
    INVOICE_GENERATING,
    INVOICE_REGENERATED,
    INVOICE_STATE_CHANGE_FAILED,
    INVOICE_STATE_CHANGED,
    INVOICE_STATE_CHANGING,
    INVOICES_FETCH_FAILED,
    INVOICES_FETCHED,
    INVOICES_FETCHING
} from "../actions/invoice";

export function invoice(state = {
    isFetching: false,
    isFailed: false,
    invoices: [],
    invoiceMap: {}
}, action) {
    switch (action.type) {
        case INVOICES_FETCHING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
            });
        case INVOICE_FETCHED_FOR_VEHICLE:
            let map = state.invoiceMap;
            map[action.data.invoices[0].vehicle.uuid] = action.data.invoices;
            return Object.assign({}, state,{
                isFetching: false,
                invoiceMap: map
            });
        case INVOICES_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                invoices: action.data.invoices,
            });
        case INVOICE_GENERATING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
            });
        case INVOICE_REGENERATED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                invoices: state.invoices.map(inv => inv.uuid === action.data.uuid ? action.data : inv)
            });
        case INVOICE_STATE_CHANGING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false
            });
        case INVOICE_STATE_CHANGED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                invoices: state.invoices.map(inv => inv.uuid === action.data.uuid ? action.data : inv)
            });
        case INVOICE_STATE_CHANGE_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            });
        case INVOICE_GENERATE_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
            })
        case INVOICES_FETCH_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            });
        default:
            return state
    }
}