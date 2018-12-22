import { fromJS } from 'immutable';
import * as constants from './constants';
const localMenuPath = localStorage.getItem('menuPath');
const defaultState = fromJS({
    menuPath: localMenuPath ? Number(localMenuPath) : 0,
    menuList: [
        {
            id: 0,
            name: '工作台',
            iconfont: 'icon-gongzuotai',
            path: '/personal'
        },
        {
            id: 1,
            name: '项目',
            iconfont: 'icon-gongdan',
            path: '/project'
        },
        {
            id: 2,
            name: '工作附件',
            iconfont: 'icon-wenjian1',
            path: '/file'
        },
    ]
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.MENU_PATH_CHANGE:
            return state.set('menuPath', action.id);
        default: 
            return state;
    }
}