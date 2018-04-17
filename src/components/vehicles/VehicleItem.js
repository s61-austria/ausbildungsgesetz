import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, RaisedButton, TextField} from 'material-ui'
import {InvoiceList} from "../invoices/InvoiceList";
import {InvoiceListWrapped} from "../invoices/InvoiceListWrapped";
import {changeInvoiceState, fetchInvoices, fetchInvoicesForVehicle, regenerateInvoice} from "../../actions/invoice";
import {connect} from "react-redux";
import {changeVehicleOwner, fetchVehicles} from "../../actions/vehicle";
import {VehicleListWrapped} from "./VehicleListWrapped";

const textFieldStyle = {
    marginLeft: 8,
    marginRight: 8
};

export class VehicleItem extends React.Component {
    constructor(props) {
        super(props);

        this.ownerUuid = undefined;

        this.props.vehicle.invoices = [];
        fetchInvoicesForVehicle(this.props.vehicle.uuid);

        this.handleOwnerUuidTextFieldChanged = this.handleOwnerUuidTextFieldChanged.bind(this);
        this.handleOnInvoiceListExpanded = this.handleOnInvoiceListExpanded.bind(this);
    }

    componentDidMount(){
        this.props.vehicle.invoices = [];
    }

    handleOwnerUuidTextFieldChanged(event, value){
        this.ownerUuid = value;
        console.log(value);
    }

    handleOnInvoiceListExpanded(value) {
        fetchInvoicesForVehicle(this.props.vehicle.uuid)
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title={this.props.vehicle.licensePlate}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true} >
                    <p>Id: {this.props.vehicle.uuid}</p>
                    <p>Hardware serial: {this.props.vehicle.hardwareSerialNumber}</p>
                    <p>Vehicle type: {this.props.vehicle.vehicleType}</p>
                    {this.props.vehicle.owner == null ? <p>Owner: undefined</p> :
                        <p>Owner: {this.props.vehicle.owner.kontoUser.userName}</p> }
                    {this.props.vehicle.currentLocation == null ? <p>Current location: undefined</p> :
                        <p>Current country: {this.props.vehicle.currentLocation.country.name}</p> }

                    <RaisedButton
                        label="Change owner"
                        onClick={() => this.props.changeVehicleOwner(this.ownerUuid, this.props.vehicle)}
                        primary
                    />

                    <TextField
                        id="ownerUuid"
                        defaultValue={this.props.vehicle.owner == null ? "" : `${this.props.vehicle.owner.uuid}`}
                        floatingLabelText="Owner uuid"
                        style={textFieldStyle}
                        onChange={this.handleOwnerUuidTextFieldChanged}
                    />
                    {/*todo make this view admin only*/}
                    <Card id="AdminCard" onExpandChange={this.handleOnInvoiceListExpanded}>
                        <CardHeader
                            title="Invoices"
                            actAsExpander={true}
                            showExpandableButton={true}
                        />
                        <CardText expandable={true} >
                            <InvoiceList
                                invoices={this.props.vehicle.invoices}
                                regenerateInvoice={this.props.regenerateInvoice}
                                changeInvoiceState={this.props.changeInvoiceState}
                            />
                        </CardText>
                    </Card>
                </CardText>
            </Card>
        )
    }
}

VehicleItem.propTypes = {
    vehicle: PropTypes.shape({
        invoices: PropTypes.array,
        key: PropTypes.string,
        uuid: PropTypes.number,
        hardwareSerialNumber: PropTypes.string,
        licensePlate: PropTypes.string,
        vehicleType: PropTypes.string,
        activities: PropTypes.array,
        owner: PropTypes.shape({}),
        currentLocation: PropTypes.shape({})
    }).isRequired,
    changeVehicleOwner: PropTypes.func.isRequired,
    regenerateInvoice: PropTypes.func.isRequired,
    changeInvoiceState: PropTypes.func.isRequired
};