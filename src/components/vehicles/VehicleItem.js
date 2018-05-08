import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, RaisedButton, TextField} from 'material-ui'
import {InvoiceListFilter} from "../invoices/InvoiceListFilter";
import InvoiceListWrapped from "../invoices/InvoiceListWrapped";

const textFieldStyle = {
    marginLeft: 8,
    marginRight: 8
};

export class VehicleItem extends React.Component {
    constructor(props) {
        super(props);

        this.ownerUuid = undefined;

        this.props.vehicle.invoices = [];
        this.handleOwnerUuidTextFieldChanged = this.handleOwnerUuidTextFieldChanged.bind(this);
    }

    componentDidMount(){
        this.props.vehicle.invoices = [];
    }

    handleOwnerUuidTextFieldChanged(event, value){
        this.ownerUuid = value;
        console.log(value);
    }

    render() {

        console.log(this.props.vehicle.uuid);

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
                            <InvoiceListWrapped
                                id={this.props.vehicle.uuid}
                                type="vehicle"
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
        uuid: PropTypes.string,
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