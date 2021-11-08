import {USERS,REGISTER} from '../constance/constance.js'

export const GetUsers = (state = [], action)=>{
    switch(action.type){
        case 'USERS' : 
            return action.payload
        default :
            return state
    }
}

export const RegisterReducer = (state = [],action)=>{
    switch(action.type){
        case REGISTER : 
            return action.payload
        default :
            return state
    }
}
