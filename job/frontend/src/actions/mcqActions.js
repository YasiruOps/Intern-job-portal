import {SET_MQC_STATUS,SET_MCQ_ANSWER,RESET_MCQ, SET_MCQ} from '../actions/types';

export const setmcqstatus=(payload)=>{
    return{
        type:SET_MQC_STATUS,
        payload
    }
}

export const setmcqanswer=(payload)=>{
    return{
        type:SET_MCQ_ANSWER,
        payload
    }
}

export const setmcq=(payload)=>{
    return{
        type:SET_MCQ,
        payload
    }
}

export const restmcqs=()=>{
    return{
        type:RESET_MCQ
    }
}

