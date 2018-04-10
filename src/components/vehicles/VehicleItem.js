import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText, RaisedButton, TextField} from 'material-ui'

const textFieldStyle = {
    marginLeft: 8,
    marginRight: 8
};

export class VehicleItem extends React.Component {
    constructor(props) {
        super(props);

        this.ownerUuid = undefined;

        this.handleOwnerUuidTextFieldChanged = this.handleOwnerUuidTextFieldChanged.bind(this);
    }

    handleOwnerUuidTextFieldChanged(event, value){
        this.ownerUuid = value;
        console.log(value);
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
                    <p>Id: {this.props.vehicle.id}</p>
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
                </CardText>
            </Card>
        )
    }
}

VehicleItem.propTypes = {
    vehicle: PropTypes.shape({
        key: PropTypes.string,
        id: PropTypes.number,
        hardwareSerialNumber: PropTypes.string,
        licensePlate: PropTypes.string,
        vehicleType: PropTypes.string,
        activities: PropTypes.array,
        owner: PropTypes.shape({}),
        currentLocation: PropTypes.shape({})
    }).isRequired,
    changeVehicleOwner: PropTypes.func.isRequired
};