import {invoice} from "../reducers/invoice";
import request from 'superagent-es6-promise'

export const INVOICES_FETCHING = "INVOICES_FETCHING";
export const INVOICES_FETCHED = "INVOICES_FETCHED";

export function fetchInvoices() {
    return (dispatch) => {
        dispatch({type: INVOICES_FETCHING});

        request.get("http://localhost:8080/government/api" + "/invoices")
            .then(result =>
                dispatch({
                    type: INVOICES_FETCHED, data: {invoices: result.body}
                }))
    }
}