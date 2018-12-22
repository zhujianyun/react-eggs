import Http from '../../../api/http';
import * as constants from './constants';
export const guiderShowChange = (guiderShow) => ({
    type: constants.GUIDER_SHOW,
    guiderShow
});

const getList = (list) => ({
    type: constants.GET_PROJECT_LIST,
    list
})
const getHttpList = async (id) => {
    const obj = { createrId: id };
    const obj1 = { userId: id };
    let list1 = () => {
        return new Promise((resolve, reject) => {
            Http('/project_getListByCreaterId', obj).then(res => {
                resolve(res.result);
            }).catch( err => {
                reject(err)
            });
        });
    }
    let list2 = () => {
        return new Promise((resolve, reject) => {
            Http('/projectParticipation_getListByUserId', obj1).then(res => {
                resolve(res.result);
            }).catch( err => {
                reject(err)
            });
        });
    }
    try {
        let [list_one, list_two] = await Promise.all([list1(), list2()]);
        return [list_one, list_two];
    } catch(err) {
        console.log('项目列表获取失败', err);
    }
}

export const getProjectList = (id) => {
    return (dispatch) => {
        getHttpList(id).then(res => {
            const list = [
                {
                    id: 0,
                    name: '我负责的',
                    list: res[0]
                },
                {
                    id: 1,
                    name: '我参与的',
                    list: res[1]
                },
            ];

            dispatch(getList(list));
        });
    }
}