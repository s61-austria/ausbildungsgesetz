import React from 'react'
import PropTypes from 'prop-types'

export class VehicleItem extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.vehicle.name}</h1>
                <p>{this.props.vehicle.id}</p>
            </div>
        )
    }
}

VehicleItem.propTypes = {
    vehicle: PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
    }).isRequired
};