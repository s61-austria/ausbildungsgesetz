import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {invoice} from '../reducers/invoice'
import * as types from '../actions/invoice'
import expect from 'expect'
import {INVOICES_FETCHED} from "../actions/invoice";
import {INVOICES_FETCH_FAILED} from "../actions/invoice";
import {INVOICE_GENERATING} from "../actions/invoice";
import {INVOICE_REGENERATED} from "../actions/invoice";
import {INVOICE_STATE_CHANGE_FAILED} from "../actions/invoice";
import {INVOICE_GENERATE_FAILED} from "../actions/invoice";
import {INVOICE_ADDING_PAYMENT} from "../actions/invoice";
import {INVOICE_PAYMENT_ADDED} from "../actions/invoice";
import {INVOICE_ADDING_PAYMENT_FAILED} from "../actions/invoice"; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const invoices = [
    {uuid: "1234", type: "LKW"},
    {uuid: "1235", type: "PKW"}
];

const invoice2 = {uuid: "1235", type: "MOTOR"};

const state = {
    isFetching: false,
    isChanged: false,
    isFailed: false,
    isPaymentCreated: false,
    invoices: invoices
};

describe('async actions', () => {

    it('should handle INVOICES_FETCHING', () => {
        expect(
            invoice({}, {type: types.INVOICES_FETCHING}))
            .toEqual({
                isFetching: true,
                isFailed: false,
            })
    });

    it('should handle INVOICES_FETCHED', () => {
        expect(
            invoice({}, {
                type: types.INVOICES_FETCHED,
                data: {
                    invoices
                }
            }))
            .toEqual({
                isFetching: false,
                isFailed: false,
                invoices: invoices
            })
    });

    it('should handle INVOICE_GENERATING', () => {
        expect(
            invoice({}, {type: types.INVOICE_GENERATING}))
            .toEqual({
                isFetching: false,
                isFailed: false,
            })
    });

    it('should handle INVOICE_REGENERATED', () => {
        expect(
            invoice(state, {
                type: types.INVOICE_REGENERATED,
                data: invoice2}))
            .toEqual({
                isFetching: false,
                isFailed: false,
                isPaymentCreated: false,
                isChanged: false,
                invoices: invoices.map(inv => inv.uuid === invoice2.uuid ? invoice2 : inv)
            })
    });

    it('should handle INVOICE_STATE_CHANGE_FAILED', () => {
        expect(
            invoice({}, {type: types.INVOICE_STATE_CHANGE_FAILED}))
            .toEqual({
                isFetching: false,
                isChanged: false,
                isFailed: true,
            })
    });

    it('should handle INVOICE_GENERATE_FAILED', () => {
        expect(
            invoice({}, {type: types.INVOICE_GENERATE_FAILED}))
            .toEqual({
                isFetching: false,
                isFailed: false,
            })
    });

    it('should handle INVOICES_FETCH_FAILED', () => {
        expect(
            invoice({}, {type: types.INVOICES_FETCH_FAILED}))
            .toEqual({
                isFetching: false,
                isFailed: true,
            })
    });

    it('should handle INVOICE_ADDING_PAYMENT', () => {
        expect(
            invoice({}, {type: types.INVOICE_ADDING_PAYMENT}))
            .toEqual({
                isFetching: true,
                isFailed: false,
                isPaymentCreated: false,
            })
    });

    it('should handle INVOICE_PAYMENT_ADDED', () => {
        expect(
            invoice(state, {type: types.INVOICE_PAYMENT_ADDED, data: invoice2}))
            .toEqual({
                isFetching: false,
                isPaymentCreated: true,
                isFailed: false,
                isChanged: false,
                invoices: invoices.map(inv => inv.uuid === invoice2.uuid ? invoice2 : inv)
            })
    });

    it('should handle INVOICE_ADDING_PAYMENT_FAILED', () => {
        expect(
            invoice({}, {type: types.INVOICE_ADDING_PAYMENT_FAILED}))
            .toEqual({
                isFetching: false,
                isPaymentCreated: false,
                isFailed: true,
            })
    });
})