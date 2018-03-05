import React from 'react'

import {VehicleItem} from './VehicleItem'

export class VehicleList extends React.Component {
    constructor(props) {
        super(props);

        this.vehicles = [
            {id: 1, name: "henk"},
            {id: 2, name: "sjors"}
        ]
    }

    render() {
        return (
            <div>
                {this.vehicles.map(vehicle => <VehicleItem vehicle={vehicle}/>)}
            </div>
        )
    }
}