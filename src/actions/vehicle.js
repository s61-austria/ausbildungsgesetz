import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";

export const VEHICLES_FETCHING = "VEHICLES_FETCHING";
export const VEHICLES_FETCHED = "VEHICLES_FETCHED";


export function fetchVehicles() {
    return (dispatch) => {
        dispatch({type: VEHICLES_FETCHING});

        request.get(`http://localhost:8080/${SERVER_URL}/api/vehicles`)
            .then(result =>
                dispatch({
                    type: VEHICLES_FETCHED, data: {vehicles: result.body}
                }))
    }
}