import {SET_EMPLOYERID,LOGOUT,SET_INTERNID} from '../actions/types';

const initialState={
    employerid:null,
    internID:null,

}

export default function(state=initialState,action){
    switch(action.type){
        case SET_EMPLOYERID:
            return{
                ...state,
                employerid:action.payload
            }

        case SET_INTERNID:
            return{
                ...state,
                internID:action.payload
            }

        case LOGOUT:
            return initialState;
            
        default:
            return state
    }
}

