import {SET_SEARCH} from '../actions/types';

const data = {
    location:["colombo","negambo", "panadura","malabe"],
    date_posted:["1 day","3 days", "1 week","2 weeks", "1 month", "All time"],
    salary:["10,000","10,000 - 50,000", "50,000 - 100,000","100,000 - 200,000", "200,000 - 500,000", "500,000+"]
}

const initialState={
    data,
    searchoption:null
}

console.log("initial state", initialState)

export default function(state=initialState,action){
    switch(action.type){
        case SET_SEARCH:
            return{
                ...state,
                searchoption:action.payload
            }
            
        default:
            return state
    }
}

