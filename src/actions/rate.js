import request from 'superagent-es6-promise'

export const RATE_UPDATED_PENDING = "RATE_UPDATED_PENDING";
export const RATE_UPDATED_SUCCESS = "RATE_UPDATED_SUCCESS";
export const RATE_UPDATED_ERROR = "RATE_UPDATED_ERROR";

export const RATE_ADDED_PENDING = "RATE_ADDED_PENDING";
export const RATE_ADDED_SUCCESS = "RATE_ADDED_SUCCESS";
export const RATE_ADDED_ERROR = "RATE_ADDED_ERROR";

export function addRate(rate) {
    return (dispatch) => {
        dispatch({type: RATE_ADDED_PENDING, data: rate});

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
        dispatch({type: RATE_UPDATED_PENDING, data: rate});

        request
            .put('http://localhost:8080/government/api' + '/rates/' + rate.id)
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