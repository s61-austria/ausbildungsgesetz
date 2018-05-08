import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";

export const INVOICES_FETCHING = "INVOICES_FETCHING";
export const INVOICES_FETCH_FAILED = "INVOICES_FETCH_FAILED";
export const INVOICES_FETCHED = "INVOICES_FETCHED";

export const INVOICE_STATE_CHANGING = "INVOICE_STATE_CHANGING";
export const INVOICE_STATE_CHANGED = "INVOICE_STATE_CHANGED";
export const INVOICE_STATE_CHANGE_FAILED = "INVOICE_STATE_CHANGE_FAILED";

export const INVOICE_GENERATING = "INVOICE_GENERATING";
export const INVOICE_REGENERATED = "INVOICE_REGENERATED";
export const INVOICE_GENERATE_FAILED = "INVOICE_GENERATE_FAILED";

export const INVOICE_FETCHING_FOR_VEHICLE = "INVOICE_FETCHING_FOR_VEHICLE";
export const INVOICE_FETCHED_FOR_VEHICLE = "INVOICE_FETCHED_FOR_VEHICLE";
export const INVOICE_FETCH_FOR_VEHICLE_FAILED = "INVOICE_FETCH_FOR_VEHICLE_FAILED";

export function fetchInvoices(startDate, endDate) {
    return (dispatch) => {
        dispatch({type: INVOICES_FETCHING});

        request.get(`http://localhost:8080/${SERVER_URL}/api/invoices`)
            .then(result =>
                dispatch({
                    type: INVOICES_FETCHED, data: {invoices: result.body}
                }))
            .catch(error =>
                dispatch({
                    type: INVOICES_FETCH_FAILED, error
                }))
    }
}

export function fetchInvoicesForVehicle(vehicleId) {
    console.log(vehicleId);
    return (dispatch) => {
        dispatch({type: INVOICES_FETCHING, vehicleId: vehicleId});

        request.get(`http://localhost:8080/${SERVER_URL}/api/invoices?vehicleId=${vehicleId}`)
            .then(result =>
                dispatch({
                    type: INVOICE_FETCHED_FOR_VEHICLE, data: {invoices: result.body}, vehicleId: vehicleId
                }))
            .catch(error =>
                dispatch({
                    type: INVOICES_FETCH_FAILED, error
                }))
    }
}

export function changeInvoiceState(invoice, state) {
    return(dispatch) => {
        dispatch({type: INVOICE_STATE_CHANGING, invoice, state});

        request.post(`http://localhost:8080/${SERVER_URL}/api/invoices/update/state/${invoice.uuid}?state=${state}`)
            .then(result =>
                dispatch({
                    type: INVOICE_STATE_CHANGED, data: result.body
                }))
            .catch(error => dispatch({
                type: INVOICE_STATE_CHANGE_FAILED, error
            }))
    }
}

export function regenerateInvoice(invoice) {
    return (dispatch) => {
        dispatch({type: INVOICE_GENERATING, invoice});

        request.put(`http://localhost:8080/${SERVER_URL}/api/invoices/regenerate/${invoice.uuid}`)
            .then(result =>
                dispatch({
                    type: INVOICE_REGENERATED, data: result.body
                }))
            .catch(error => dispatch({
                type: INVOICE_GENERATE_FAILED, error
            }))
    }
}
