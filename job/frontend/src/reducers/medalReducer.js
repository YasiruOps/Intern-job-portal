import {SET_MEDAL, SET_GPLAYED, LOGOUT} from '../actions/types';

const initialState={
    medal:[],
    gplayed:0
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_MEDAL:
            return{
                ...state,
                medal:action.payload
            }
        case SET_GPLAYED:
            return{
                ...state,
                gplayed:action.payload
            }

        case LOGOUT:
            return initialState
 
            
        default:
            return state
    }
}

