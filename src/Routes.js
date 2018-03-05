import React from 'react'
import {IndexRoute, Route} from 'react-router'
import VehicleListWrapped from "./components/vehicles/VehicleListWrapped";
import {App} from "./components/App";

export default(
    <Route path="/" component={App}>
        <IndexRoute component={VehicleListWrapped }/>
    </Route>
)
