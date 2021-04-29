import { combineReducers } from 'redux';
import auth_reducer from './auth-reducer'
import app_reducer from './app-reducer'
import usamareducer from './usama-reducer'

var state = combineReducers({
    auth: auth_reducer,
    app: app_reducer,
    usama:usamareducer
})

export default state;