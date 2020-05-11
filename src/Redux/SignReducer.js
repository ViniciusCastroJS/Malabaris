import {SIGN_NAME, SIGN_EMAIL} from "./Constants"

const InitialState = {
    NewUser:{
        name:'',
        email:'',
        price: 0,
        password:'',
        adress:'',
        category: '',
        week_days: '',
        day_shifts: '',

    }
}

const SignReducer = (state = InitialState, action) => {
   switch(action.type){

    case SIGN_NAME:
        return{
            NewUser:{
                ...state,
                name: action.payload
            } 
        }

    case SIGN_EMAIL:
        return{
            NewUser:{
                ...state,
                email: action.payload
            } 
        }    


    default: return state
   }
}

export default SignReducer;