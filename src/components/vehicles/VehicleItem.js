import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText} from 'material-ui'

export class VehicleItem extends React.Component {
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
                    {!this.props.vehicle.hasOwnProperty("owner") ? <p></p> :
                        <p>Owner: {this.props.vehicle.owner.name}</p> }
                    {!this.props.vehicle.currentLocation.hasOwnProperty('country') ? <p></p> :
                        <p>Current country: {this.props.vehicle.currentLocation.country.name}</p> }

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
    }).isRequired
};