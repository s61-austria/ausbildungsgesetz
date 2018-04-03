import React from 'react'
import PropTypes from 'prop-types'
import {VehicleItem} from './VehicleItem'

export class VehicleList extends React.Component {

    render() {
        return (
            <div>
                {this.props.vehicles.map(vehicle => <VehicleItem vehicle={vehicle}/>)}
            </div>
        )
    }
}

VehicleList.propTypes = {
    vehicles: PropTypes.array.isRequired
};