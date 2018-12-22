import { combineReducers } from 'redux-immutable';
import {reducer as homeReducer } from '../components/home/store';
import { reducer as projectReducer } from '../components/project/store';
import { reducer as personalReducer } from '../components/personal/store';
import { reducer as LoginReducer } from '../components/login/store';
const reducer = combineReducers({
    home: homeReducer,
    personal: personalReducer,
    project: projectReducer,
    login: LoginReducer
});
export default reducer;

