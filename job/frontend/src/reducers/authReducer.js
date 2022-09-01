import {SET_EMPLOYERID,LOGOUT} from '../actions/types';

const initialState={
    employerid:null,

}

export default function(state=initialState,action){
    switch(action.type){
        case SET_EMPLOYERID:
            return{
                ...state,
                employerid:action.payload
            }

        case LOGOUT:
            return initialState;
            
        default:
            return state
    }
}

