import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import loadingReducer from './loading.reducer';

const allReducer = combineReducers({
    userReducer,
    loadingReducer
})

export default allReducer;