import React from 'react'

import {VehicleList} from "./vehicles/VehicleList";

export class App extends React.Component {
    render(){
        return(
            <div>
                <VehicleList/>
            </div>
        )
    }
}