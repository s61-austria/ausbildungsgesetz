import React from 'react'
import PropTypes from 'prop-types'
import {VehicleItem} from './VehicleItem'
import {changeInvoiceState, regenerateInvoice} from "../../actions/invoice";

export class VehicleList extends React.Component {

    render() {
        return (
            <div>
                {this.props.vehicles.map(vehicle => <VehicleItem vehicle={vehicle}
                                                                 changeVehicleOwner={this.props.changeVehicleOwner}
                                                                 regenerateInvoice={this.props.regenerateInvoice}
                                                                 changeInvoiceState={this.props.changeInvoiceState}
                />)}
            </div>
        )
    }
}

VehicleList.propTypes = {
    vehicles: PropTypes.array.isRequired,
    changeVehicleOwner: PropTypes.func.isRequired,
    regenerateInvoice: regenerateInvoice,
    changeInvoiceState: changeInvoiceState
};