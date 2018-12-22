import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    userName: '',
    passWord: '',
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.USERNAME_CHANGE:
            return state.set('userName', action.value);
        case constants.PW_CHANGE:
            return state.set('passWord', action.value);
        default: 
            return state;
    }
}