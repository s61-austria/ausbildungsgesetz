import {LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_FAILED} from "../actions/auth";

export function auth(state = {
    isFetching: false,
    isFailed: false,
    isLoggedIn: false,
    token: "",
    username: ""
}, action) {
    switch(action.type) {
        case LOGIN_PENDING:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
                isLoggedIn: false,
                username: action.username,
                token: ""
            })
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.result)
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                isLoggedIn: true,
                token: action.result
            })
        case LOGIN_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
                isLoggedIn: false
            })
        default:
            return state
    }
}