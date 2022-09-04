import {SET_EMPLOYERID,LOGOUT,SET_INTERNID} from '../actions/types';

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

export const setinternid=(id)=>{
    return{
        type:SET_INTERNID,
        payload:id,
    }
}

