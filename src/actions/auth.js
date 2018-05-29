import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export function register(credentials){
    return (dispatch) => {
        dispatch({type: REGISTER_PENDING, username: credentials.username, password: credentials.password})
        return request.post(`http://localhost:8080/${SERVER_URL}/api/auth/register`)
            .send(credentials)
            .then(result => {
                dispatch({type: REGISTER_SUCCESS, result: result.text});
            })
            .catch(e => {
                dispatch({type: REGISTER_FAILED, e});
            })
    }
}

export function login(credentials){
    return (dispatch) => {
        dispatch({type: LOGIN_PENDING, username: credentials.username, password: credentials.password})
    }
}