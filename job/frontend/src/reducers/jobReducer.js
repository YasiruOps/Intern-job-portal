import {SET_JOBS,SET_JOB,SET_FILTER_JOBS,SEARCH_OFF} from '../actions/types';

const initialState={
    jobs:[],
    selectjob:null,
    fiterdjobs:[],
    searchoff:true
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

        case SET_FILTER_JOBS:
            return{
                ...state,
                fiterdjobs:action.payload
            }

        case SEARCH_OFF:
            return{
                ...state,
                searchoff:action.payload
            }     

        default:
            return state
    }
}

