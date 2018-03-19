import request from 'superagent-es6-promise'

export const UPDATING_PENDING = "UPDATING_PENDING";
export const RATE_UPDATED_SUCCESS = "RATE_UPDATED_SUCCESS";
export const RATE_UPDATED_ERROR = "RATE_UPDATED_ERROR";

export const ADDING_PENDING = "ADDING_PENDING";
export const RATE_ADDED_SUCCESS = "RATE_ADDED_SUCCESS";
export const RATE_ADDED_ERROR = "RATE_ADDED_ERROR";

export function addRate(rate) {
    return (dispatch) => {
        dispatch({type: ADDING_PENDING});

        request
            .post('http://localhost:8080/government/api' + '/rates')
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

export function updateRate(rate) {
    return (dispatch) => {
        dispatch({type: UPDATING_PENDING});

        request
            .put('localhost:8080/government/api' + '/rates')
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