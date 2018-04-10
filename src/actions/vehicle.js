import request from 'superagent-es6-promise'
import {SERVER_URL} from "../components/App";
import {RATE_UPDATED_SUCCESS} from "./rate";

export const VEHICLES_FETCHING = "VEHICLES_FETCHING";
export const VEHICLES_FETCHED = "VEHICLES_FETCHED";

export const VEHICLE_CHANGING = "VEHICLE_CHANGING";
export const VEHICLE_CHANGED = "VEHICLE_CHANGED";

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

export function changeVehicleOwner(ownerUuid, vehicle) {
    return (dispatch) => {
        dispatch({type: VEHICLE_CHANGING});

        console.log("Owner uuid:" + ownerUuid);
        console.log(vehicle);

        let val = Object.assign({}, vehicle, {
                owner: ownerUuid
            }
        );

        request
            .put(`http://localhost:8080/${SERVER_URL}/api/vehicles`)
            .set('Content-Type', 'application/json')
            .send(val)
            .then(result => {
                dispatch({
                    type: VEHICLE_CHANGED,
                    data: result.body
                })
            })
    }
}