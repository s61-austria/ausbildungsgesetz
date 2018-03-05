export const VEHICLES_FETCHING = "VEHICLES_FETCHING";
export const VEHICLES_FETCHED = "VEHICLES_FETCHED";

export function fetchVehicles() {
    return (dispatch) => {
        dispatch({type: VEHICLES_FETCHING});

        setTimeout(() => dispatch({
            type: "VEHICLES_FETCHED", data: {
                vehicles: [
                    {id: 1, name: "henk"},
                    {id: 2, name: "sjors"}
                ]
            }
        }), 3000)
    }
}