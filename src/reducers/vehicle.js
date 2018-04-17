import {VEHICLES_FETCHED, VEHICLES_FETCHING, VEHICLE_CHANGED} from '../actions/vehicle'
import {
    INVOICE_FETCH_FOR_VEHICLE_FAILED,
    INVOICE_FETCHED_FOR_VEHICLE,
    INVOICE_FETCHING_FOR_VEHICLE
} from "../actions/invoice";

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
        case VEHICLE_CHANGED:
            return Object.assign({}, state, {
                isFetching: false,
                vehicles: state.vehicles.map(v => v.uuid === action.data.uuid ? action.data : v)
            });
        case INVOICE_FETCHING_FOR_VEHICLE:
            return Object.assign({}, state, {
                isFetching: true,
                isFailed: false,
            });
        case INVOICE_FETCHED_FOR_VEHICLE:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: false,
                vehicles: addInvoicesToVehicle(this.state.vehicles, action.data)
            });
        case INVOICE_FETCH_FOR_VEHICLE_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isFailed: true,
            });
        default:
            return state
    }
}

function addInvoicesToVehicle(vehicles, invoices) {
    if (invoices.size() === 0) return vehicles;

    let vehicleId = invoices[0].vehicle.uuid;
    vehicles.forEach(function(vehicle) {
        if (vehicle.uuid === vehicleId) {
            vehicle.invoices = invoices;
        }
    });

    return vehicles;
}