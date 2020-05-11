import EventReducer from './EventReducer'
import SignReducer from './SignReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    dados:EventReducer,
    NewUser: SignReducer
})