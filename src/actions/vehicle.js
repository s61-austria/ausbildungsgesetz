export const VEHICLES_FETCHING = "VEHICLES_FETCHING";
export const VEHICLES_FETCHED = "VEHICLES_FETCHED";

export function fetchVehicles() {
    return (dispatch) => {
        dispatch({type: VEHICLES_FETCHING});

        setTimeout(() => dispatch({
            type: "VEHICLES_FETCHED", data: {
                vehicles: [
                    {id: 1,
                        hardwareSerialNumber: "12131",
                        licensePlate : "NT-PD-91",
                        vehicleType: 'LKW',
                        activities: [],
                        owner: {name: "jan"},
                        currentLocation: {
                            country: {
                                name: "Nederland"
                            }
                        }
                    },
                    {id: 1,
                        hardwareSerialNumber: "12131",
                        licensePlate : "NT-PD-91",
                        vehicleType: 'LKW',
                        activities: [],
                        owner: {name: "jan"},
                        currentLocation: {
                            country: {
                                name: "Nederland"
                            }
                        }
                    }
                ]
            }
        }), 300)
    }
}