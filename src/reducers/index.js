import {combineReducers} from 'redux'
import {vehicle} from './vehicle'
import { reducer as form } from 'redux-form'
import {invoice} from "./invoice";
import {rate} from "./rate";
import {auth} from "./auth";

export default combineReducers({
    vehicle,
    invoice,
    rate,
    auth,
    form
})