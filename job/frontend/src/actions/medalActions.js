import {SET_MEDAL, SET_GPLAYED} from '../actions/types';

export const setmedals=(payload)=>{
    return{
        type:SET_MEDAL,
        payload
    }
}


export const setgamesplayed=(payload)=>{
    return{
        type:SET_GPLAYED,
        payload
    }
}


