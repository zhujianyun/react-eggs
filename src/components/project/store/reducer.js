import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    guiderShow: false,
    projectList: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.GUIDER_SHOW:
            return state.set('guiderShow', action.guiderShow);
        case constants.GET_PROJECT_LIST:
            return state.set('projectList', fromJS(action.list));
        default: 
            return state;
    }
}