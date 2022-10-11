import {SET_MQC_STATUS,SET_MCQ_ANSWER,RESET_MCQ,SET_MCQ} from '../actions/types';

const initialState={
    qstate:{},
    answer:{},
    questions:[]
    
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_MQC_STATUS:
            return{
                ...state,
                qstate:action.payload
            }

        case SET_MCQ_ANSWER:
            return{
                ...state,
                answer:action.payload
            }

        case SET_MCQ:
            return{
                ...state,
                questions:action.payload
            }

        case RESET_MCQ:
            return initialState
              
            
        default:
            return state
    }
}
