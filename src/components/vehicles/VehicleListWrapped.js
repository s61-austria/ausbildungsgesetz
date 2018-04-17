import React from 'react'
import PropTypes from 'prop-types'
import {VehicleList} from "./VehicleList";
import {connect} from "react-redux";
import {changeVehicleOwner, fetchVehicles} from "../../actions/vehicle";
import {changeInvoiceState, regenerateInvoice} from "../../actions/invoice";

export class VehicleListWrapped extends React.Component {
    componentDidMount(){
        this.props.fetchVehicles();
    }
    render() {
        return (
            <div>
                {this.props.isFetching ? <p>LOADING</p>: <p></p>}
                {this.props.children}
                <VehicleList vehicles={this.props.vehicles}
                             changeVehicleOwner={this.props.changeVehicleOwner}
                             regenerateInvoice={this.props.regenerateInvoice}
                             changeInvoiceState={this.props.changeInvoiceState}
                />
            </div>
        )
    }
}

VehicleListWrapped.propTypes = {
    isFetching: PropTypes.bool,
    vehicles: PropTypes.array,
    fetchVehicles: PropTypes.func,
    changeVehicleOwner: PropTypes.func,
    regenerateInvoice: regenerateInvoice,
    changeInvoiceState: changeInvoiceState
};

function mapStateToProps(state) {
    return {
        isFetching: state.vehicle.isFetching,
        vehicles: state.vehicle.vehicles
    }
}

export default connect(mapStateToProps, {
    fetchVehicles: fetchVehicles,
    changeVehicleOwner: changeVehicleOwner,
    regenerateInvoice: regenerateInvoice,
    changeInvoiceState: changeInvoiceState
})(VehicleListWrapped)