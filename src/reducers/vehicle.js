import {VEHICLES_FETCHED, VEHICLES_FETCHING} from '../actions/vehicle'

export function vehicle(state = {
    isFetching: false,
    vehicles: []
}, action) {
    switch (action.type) {
        case VEHICLES_FETCHING:
            return Object.assign({}, state, {
               isFetching: true
            });
        case VEHICLES_FETCHED:
            return Object.assign({}, state, {
                isFetching: false,
                vehicles: action.data.vehicles
            });
        default:
            return state
    }
}