import request from 'superagent-es6-promise'

export const INVOICES_FETCHING = "INVOICES_FETCHING";
export const INVOICES_FETCHED = "INVOICES_FETCHED";

export const INVOICE_GENERATING = "INVOICE_GENERATING";
export const INVOICE_REGENERATED = "INVOICE_REGENERATED";

export function fetchInvoices() {
    return (dispatch) => {
        dispatch({type: INVOICES_FETCHING});

        request.get("http://localhost:8080/government/api/invoices")
            .then(result =>
                dispatch({
                    type: INVOICES_FETCHED, data: {invoices: result.body}
                }))
    }
}

export function regenerateInvoice(invoice) {
    return (dispatch) => {
        dispatch({type: INVOICE_GENERATING, invoice});

        request.get(`http://localhost:8080/government/api/invoices/regenerate/${invoice.uuid}`)
            .then(result =>
                dispatch({
                    type: INVOICE_REGENERATED, data: result.body
                }))
            .catch(error => dispatch({
                type: "INVOICE_GENERATION_FAILED",
                error
            }))
    }
}
