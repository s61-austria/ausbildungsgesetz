import React from 'react'
import VehicleListWrapped from "./vehicles/VehicleListWrapped";
import {AppBar} from 'material-ui'

export class App extends React.Component {
    render() {
        return (
            <div>
                <AppBar title='KontoFahren'/>
                <VehicleListWrapped/>
            </div>
        )
    }
}