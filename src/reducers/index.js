import {combineReducers} from 'redux'
import {vehicle} from './vehicle'
import { reducer as form } from 'redux-form'

export default combineReducers({
    vehicle,
    form
})