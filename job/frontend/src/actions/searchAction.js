import {SET_SEARCH} from '../actions/types';

export const setSearch=(options)=>{
    return{
        type:SET_SEARCH,
        payload:options,
    }
}

