import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";
import * as Mollie from "mollie-api-node";
import config from '../config'

export const INVOICES_FETCHING = "INVOICES_FETCHING";
export const INVOICES_FETCH_FAILED = "INVOICES_FETCH_FAILED";
export const INVOICES_FETCHED = "INVOICES_FETCHED";

export const INVOICE_STATE_CHANGING = "INVOICE_STATE_CHANGING";
export const INVOICE_STATE_CHANGED = "INVOICE_STATE_CHANGED";
export const INVOICE_STATE_CHANGE_FAILED = "INVOICE_STATE_CHANGE_FAILED";

export const INVOICE_ADDING_PAYMENT = "INVOICE_ADDING_PAYMENT";
export const INVOICE_PAYMENT_ADDED = "INVOICE_PAYMENT_ADDED";
export const INVOICE_ADDING_PAYMENT_FAILED = "INVOICE_ADDING_PAYMENT_FAILED";

export const INVOICE_GENERATING = "INVOICE_GENERATING";
export const INVOICE_REGENERATED = "INVOICE_REGENERATED";
export const INVOICE_GENERATE_FAILED = "INVOICE_GENERATE_FAILED";

export function fetchInvoices(startDate, endDate) {
    return (dispatch) => {
        dispatch({type: INVOICES_FETCHING});


        request.get(config.API_URL + `/invoices?startDate=${startDate}&endDate=${endDate}`)
            .then(result =>
                dispatch({
                    type: INVOICES_FETCHED, data: {invoices: res.body}
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

        request.post(config.API_URL + `/invoices/update/state/${invoice.uuid}?state=${state}`)
            .then(result =>
                dispatch({
                    type: INVOICE_STATE_CHANGED, data: result.body
                }))
            .catch(error => dispatch({
                type: INVOICE_STATE_CHANGE_FAILED, error
            }))
    }
}

export function createInvoicePayment(invoice, callback) {
    return dispatch => {
        dispatch({type: INVOICE_ADDING_PAYMENT, invoice});

        request.put(config.API_URL + `/payments/create/${invoice.uuid}`)
            .then(result =>
                dispatch({
                    type: INVOICE_PAYMENT_ADDED, data: result.body
                }))
            .catch(error => dispatch({
                type: INVOICE_ADDING_PAYMENT_FAILED, error
            }))
    }
}

export function regenerateInvoice(invoice) {
    return (dispatch) => {
        dispatch({type: INVOICE_GENERATING, invoice});

        request.put(config.API_URL + `/invoices/regenerate/${invoice.uuid}`)
            .then(result =>
                dispatch({
                    type: INVOICE_REGENERATED, data: result.body
                }))
            .catch(error => dispatch({
                type: INVOICE_GENERATE_FAILED, error
            }))
    }
}
