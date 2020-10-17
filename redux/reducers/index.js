import checkinReducer from './checkinReducer'
import {combineReducers} from 'redux'
import placeReducer from "./placeReducer"

export default combineReducers({
    checkIn: checkinReducer,
    place: placeReducer
});
