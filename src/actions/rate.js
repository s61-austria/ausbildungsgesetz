import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";
import config from "../config";

export const RATE_FETCHING = "RATE_FETCHING";
export const RATE_FETCH_FAILED = "RATE_FETCH_FAILED";
export const RATE_FETCHED = "RATE_FETCHED";

export const RATE_ADDED_PENDING = "RATE_ADDED_PENDING";
export const RATE_ADDED_SUCCESS = "RATE_ADDED_SUCCESS";
export const RATE_ADDED_ERROR = "RATE_ADDED_ERROR";

export const RATE_UPDATED_PENDING = "RATE_UPDATED_PENDING";
export const RATE_UPDATED_SUCCESS = "RATE_UPDATED_SUCCESS";
export const RATE_UPDATED_ERROR = "RATE_UPDATED_ERROR";

export function fetchRates() {
    return (dispatch) => {
        dispatch({type: RATE_FETCHING});

        request.get(config.API_URL + `rates`)
            .then(result =>
                dispatch({
                    type: RATE_FETCHED, data: {rates: result.body}
                }))
            .catch(error =>
                dispatch({
                    type: RATE_FETCH_FAILED, error
                }))
    }
}

export function addRate(rate) {
    return (dispatch) => {
        dispatch({type: RATE_ADDED_PENDING, data: rate});

        request
            .post(config.API_URL + `/rates`)
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

export function updateRate(rate, price) {
    return (dispatch) => {
        dispatch({type: RATE_UPDATED_PENDING, data: rate});

        request
            .post(config.API_URL + `/rates/update/price/${rate.uuid}?price=${price}`)
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