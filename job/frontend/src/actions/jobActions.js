import {SET_JOBS,SET_JOB,SET_FILTER_JOBS, SEARCH_OFF} from '../actions/types';

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

export const setfilterjobs=(jobs)=>{
    return{
        type:SET_FILTER_JOBS,
        payload:jobs,
    }
}

export const setsearchoff=(value)=>{
    return{
        type:SEARCH_OFF,
        payload:value,
    }
}
