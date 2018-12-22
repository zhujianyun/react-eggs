import Http from '../../../api/http';
import { message } from 'antd';
import * as constants from './constants';
export const userNameChange = (value) => ({
    type: constants.USERNAME_CHANGE,
    value
});
export const pwChange = (value) => ({
    type: constants.PW_CHANGE,
    value
});

export const loginConfirm = (userName, pw, history) => {
    return (disptch) => {
        const obj = { userName: userName, pwd: pw };
        Http('/user_login', obj).then(res => {
            if(res.code === '2' || res.msg === '密码错误') {
                message.warning(' 密码错误 ');
                return;
            }
            if(res.code === '3' || res.msg === '账号不存在') {
                message.warning(' 账号不存在 ');
                return;
            }
            history.push('/project');
            message.success(' 登录成功 ');
        }).catch(err => {
            message.error('登录失败, 请检查网络！');
        });
    }
};