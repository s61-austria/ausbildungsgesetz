import request from 'superagent-es6-promise'
import {VEHICLES_FETCHED, VEHICLES_FETCHING} from "./vehicle";
import {SERVER_URL} from "../components/App";

export const RATE_UPDATED_PENDING = "RATE_UPDATED_PENDING";
export const RATE_UPDATED_SUCCESS = "RATE_UPDATED_SUCCESS";
export const RATE_UPDATED_ERROR = "RATE_UPDATED_ERROR";

export const RATE_ADDED_PENDING = "RATE_ADDED_PENDING";
export const RATE_ADDED_SUCCESS = "RATE_ADDED_SUCCESS";
export const RATE_ADDED_ERROR = "RATE_ADDED_ERROR";

export const RATE_FETCHING = "RATE_FETCHING";
export const RATE_FETCHED = "RATE_FETCHED";

export function addRate(rate) {
    return (dispatch) => {
        dispatch({type: RATE_ADDED_PENDING, data: rate});

        request
            .post(`http://localhost:8080/${SERVER_URL}/api/rates`)
            .set('Content-Type', 'application/json')
            .send(rate)
            .then(result => {
                dispatch({
                    type: RATE_ADDED_SUCCESS,
                    data: result.body
                })
            })
            .catch(error =>{
                dispatch({
                    type: RATE_ADDED_ERROR,
                    error
                })
            });
    }
}

export function fetchRates() {
    return (dispatch) => {
        dispatch({type: RATE_FETCHING});

        request.get(`http://localhost:8080/${SERVER_URL}/api/rates`)
            .then(result =>
                dispatch({
                    type: RATE_FETCHED, data: {rates: result.body}
                }))
    }
}

export function updateRate(rate) {
    return (dispatch) => {
        dispatch({type: RATE_UPDATED_PENDING, data: rate});

        request
            .put(`http://localhost:8080/${SERVER_URL}/api/rates/${rate.id}`)
            .set('Content-Type', 'application/json')
            .send(rate)
            .then(result => {
                dispatch({
                    type: RATE_UPDATED_SUCCESS,
                    data: result.body
                })
            })
            .catch(error =>{
                dispatch({
                    type: RATE_UPDATED_ERROR,
                    error
                })
            });
    }
}