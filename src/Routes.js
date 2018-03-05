import React from 'react'
import {IndexRoute, Route} from 'react-router'
import VehicleListWrapped from "./components/vehicles/VehicleListWrapped";
import {App} from "./components/App";
import VehicleDetail from "./components/vehicles/VehicleDetail";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={VehicleListWrapped}/>
        <Route path="/vehicles" component={VehicleListWrapped}/>
        <Route path="/vehicle/detail" component={VehicleDetail}/>
    </Route>
)