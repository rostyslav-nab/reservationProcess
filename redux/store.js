import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk"
import RootReducer from './reducers/index'
import {composeWithDevTools} from "redux-devtools-extension"

const initialState = {}
const middleware = [thunk]
const store = createStore(RootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store

