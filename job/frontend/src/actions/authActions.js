import {SET_EMPLOYERID} from '../actions/types';

export const logout=()=>{
    return{
        type:LOGOUT
    }
}

export const setemployerid=(id)=>{
    return{
        type:SET_EMPLOYERID,
        payload:id,
    }
}
