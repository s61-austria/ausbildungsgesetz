import React from 'react'
import {IndexRoute, Route} from 'react-router'
import VehicleListWrapped from "./components/vehicles/VehicleListWrapped";
import {App} from "./components/App";
import AddRate from "./components/rates/AddRate";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={VehicleListWrapped}/>
        <Route path="/vehicles" component={VehicleListWrapped}/>
        <Route path="/rate" component={AddRate} />
    </Route>
)