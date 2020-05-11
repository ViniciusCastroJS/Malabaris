import {SIGN_NAME, SIGN_EMAIL} from './Constants'


export const Sign_Name = (e) => {
    return {
        type: SIGN_NAME,
        payload: e.target.value
    }
}

export const Sign_Email = (e) => {
   
    return {
        type: SIGN_EMAIL,
        payload: e.target.value
    }
}


