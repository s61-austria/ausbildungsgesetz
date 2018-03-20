import {combineReducers} from 'redux'
import {vehicle} from './vehicle'
import { reducer as form } from 'redux-form'
import {invoice} from "./invoice";

export default combineReducers({
    vehicle,
    invoice,
    form
})