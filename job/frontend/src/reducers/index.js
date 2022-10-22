import {combineReducers} from 'redux';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import mcqReducer from './mcqReducer';
import searchReducer from './searchReducer';
import medalReducer from './medalReducer';

export default combineReducers({
    auth:authReducer,
    job:jobReducer,
    search:searchReducer,
    mcq:mcqReducer,
    medals:medalReducer
});