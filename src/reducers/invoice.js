import {
    INVOICES_FETCH_FAILED,
    INVOICE_GENERATING,
    INVOICE_REGENERATED,
    INVOICES_FETCHED,
    INVOICES_FETCHING,
    INVOICE_STATE_CHANGING,
    INVOICE_STATE_CHANGED,
    INVOICE_STATE_CHANGE_FAILED,
    INVOICE_GENERATE_FAILED, INVOICE_ADDING_PAYMENT, INVOICE_PAYMENT_ADDED, INVOICE_ADDING_PAYMENT_FAILED
} from "../actions/invoice";

export function invoice(state = {
    isFetching: false,
    isChanged: false,
    isFailed: false,
    isPaymentCreated: false,
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
        case INVOICE_GENERATING:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false,
            });
        case INVOICE_REGENERATED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                invoices: state.invoices.map(inv => inv.uuid === action.data.uuid ? action.data : inv)
            });
        case INVOICE_STATE_CHANGING:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false
            });
        case INVOICE_STATE_CHANGED:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false,
                isChanged: true,
                invoices: state.invoices.map(inv => inv.uuid === action.data.uuid ? action.data : inv)
            });
        case INVOICE_STATE_CHANGE_FAILED:
            return Object.assign({}, state,{
                isFetching: false,
                isChanged: false,
                isFailed: true,
            });
        case INVOICE_GENERATE_FAILED:
            return Object.assign({}, state,{
                isFetching: false,
                isFailed: false,
            });
        case INVOICES_FETCH_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            });
        case INVOICE_ADDING_PAYMENT:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
                isPaymentCreated: false,
            });
        case INVOICE_PAYMENT_ADDED:

            if(action.data.payLink !== "") {
                window.open(action.data.payLink, '_self');
            }

            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                isPaymentCreated: true,
                invoices: state.invoices.map(inv => inv.uuid === action.data.uuid ? action.data : inv)
            });
        case INVOICE_ADDING_PAYMENT_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isPaymentCreated: false,
                isFailed: true,
            });
        default:
            return state
    }
}