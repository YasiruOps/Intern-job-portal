import {SET_EMPLOYERID,LOGOUT} from '../actions/types';

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
