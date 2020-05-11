import axios from 'axios'

import { FETCH_EVENTS_REQUEST, 
         FETCH_EVENTS_SUCESS
} from './Constants'


export const FetchRequest = () => {
    return {
        type: FETCH_EVENTS_REQUEST
    }
}

export const FetchSucessEvents = events => {
    return {
        type:FETCH_EVENTS_SUCESS,
        payload: events
    }
}

export const FetchEvents = () => {
    return (dispatch) => {
        dispatch(FetchRequest)
        axios.get('http://127.0.0.1:5500/db.json')
        .then(
            response => {
                dispatch(FetchSucessEvents(response.data.events))
            }
        )
    }    
}


