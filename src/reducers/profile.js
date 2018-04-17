import {PROFILES_FETCH_FAILED, PROFILES_FETCHED, PROFILES_FETCHING} from "../actions/profile";

export function profile(state = {
    isFetching: false,
    profiles: []
}, action) {
    switch (action.type) {
        case PROFILES_FETCHING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case PROFILES_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                profiles: action.data.profiles
            });
        case PROFILES_FETCH_FAILED:
            return error();
        default:
            return state
    }
}