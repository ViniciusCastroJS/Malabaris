import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCESS} from "./Constants"

const InitialState = {
    loading: false,
    events: [],
    error:'Ocorreu um erro na aplicação'
}

const EventReducer = (state = InitialState, action) => {
   switch(action.type){
    case FETCH_EVENTS_REQUEST:
        return{
            ...state,
            loading: true    
        }
    case FETCH_EVENTS_SUCESS:
        return{
            loading: false,
            events: action.payload,
            error: ''
        }   

    default: return state
   }
}

export default EventReducer
