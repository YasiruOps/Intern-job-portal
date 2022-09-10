import {SET_JOBS,SET_JOB,} from '../actions/types';

const initialState={
    jobs:[],
    selectjob:null,

}

export default function(state=initialState,action){
    switch(action.type){
        case SET_JOBS:
            return{
                ...state,
                jobs:action.payload
            }


        case SET_JOB:
            return{
                ...state,
                selectjob:state?.jobs?.find(item=>item._id===action.payload)
                
            }

            
        default:
            return state
    }
}

