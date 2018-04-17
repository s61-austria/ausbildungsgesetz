import request from "superagent-es6-promise";
import {SERVER_URL} from "../components/App";

export const PROFILES_FETCHING = "PROFILES_FETCHING"
export const PROFILES_FETCHED = "PROFILES_FETCHED"
export const PROFILES_FETCH_FAILED = "PROFILES_FETCH_FAILED"

export function fetchInvoicesForVehicle(vehicleUUID){
    return (dispatch) => {
        dispatch({type: PROFILES_FETCHING});

        request.get(`http://localhost:8080/${SERVER_URL}/api/profiles?vehicleUUID=${vehicleUUID}`)
            .then(result =>
                dispatch({
                    type: PROFILES_FETCHED, data: {profiles: result.body}
                }))
            .catch(error =>
                dispatch({
                    type: PROFILES_FETCH_FAILED, error
                }))
    }
}