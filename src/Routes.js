import React from 'react'
import {Route} from 'react-router'
import VehicleListWrapped from "./components/vehicles/VehicleListWrapped";
import {App} from "./components/App";
import AddRate from "./components/rates/AddRate";
import UpdateRate from "./components/rates/UpdateRate";
import InvoiceListWrapped from "./components/invoices/InvoiceListWrapped";
import RateListWrapped from "./components/rates/RateListWrapped";
import Login from "./components/auth/Login";

export default (
    <Route path="/" component={App}>
        <Route path="/invoices" component={InvoiceListWrapped}/>
        <Route path="/vehicles" component={VehicleListWrapped}/>
        <Route path="/rates" component={RateListWrapped}/>
        <Route path="/rates/add" component={AddRate} />
        <Route path="/rates/update" component={UpdateRate} />
        <Route path="/login" component={Login} />
    </Route>
)