import {SET_JOBS,SET_JOB} from '../actions/types';

export const setjobbas=(jobs)=>{
    return{
        type:SET_JOBS,
        payload:jobs,
    }
}

export const setjob=(id)=>{
    return{
        type:SET_JOB,
        payload:id,
    }
}

