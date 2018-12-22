import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Checkbox, message } from 'antd';
import { action } from './store';
import { LoginWrapper, LoginHeader, LoginMain } from './style';
class Login extends Component {
    render() {
        const { 
            userName, 
            passWord, 
            handleNameChange, 
            handlePWChange, 
            handleNameFocus,
            handleNameBlur, 
            handlePWBlur, 
            handlePWFocus,
            login 
        } = this.props;
        return (
            <LoginWrapper>
                <div className='grid_bg'></div>
                <LoginHeader>
                    <span className='logo_pic'></span>
                    <span className='login_register'>注册</span>
                    <span className='login_register selected'>登录</span>
                </LoginHeader>
                <LoginMain>
                    <p className='title'>账号密码登录</p>
                    <div className='group_input'>
                        <input 
                            type='text' placeholder='请输入邮箱账号' 
                            value={userName}
                            onChange={(e) => handleNameChange(e.target.value)}
                            onBlur={(e) => handleNameBlur(e.target.value)}
                            onFocus={(e) => handleNameFocus(e.target.value)}
                            />
                    </div>
                    <div className='group_input'>
                        <input 
                            type='password' placeholder='请输入密码'
                            value={passWord}
                            onChange={(e) => handlePWChange(e.target.value)}
                            onBlur={(e) => handlePWBlur(e.target.value)}
                            onFocus={(e) => handlePWFocus(e.target.value)}
                            />
                    </div>
                    <div className='login_opereat'>
                        <Checkbox className='checkbox'></Checkbox>
                        <span className='checkbox_name'>下次自动登录</span>
                        <div className='right'>
                            <span>忘记密码？</span>
                            <span className='line'>|</span>
                            <span>注册</span>
                        </div>
                    </div>
                    <div className='login_sure' onClick={() => login(userName, passWord)}>
                        <span>确认登录</span>
                        <i className='iconfont icon-tubiaozhizuomoban'></i>
                    </div>
                    <div className='other_login'>
                        <p>你也可以用以下方式登录</p>
                        <p><i className='iconfont icon-weixin'></i></p>
                    </div>
                    
                    
                </LoginMain>
            </LoginWrapper>
        )
    }
}
let loginFlag = true;
const mapStateToProps = (state) => ({
    userName: state.getIn(['login', 'userName']),
    passWord: state.getIn(['login', 'passWord']),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleNameChange(value) {
        dispatch(action.userNameChange(value));
    },
    handlePWChange(value) {
        dispatch(action.pwChange(value));
    },
    handleNameBlur(value) {
        if(!value) {
            message.warning('请输入邮箱账号');
            return loginFlag = false;
        }
        // const emailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        // const reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
        // if(!emailReg.test(value) && !reg.test(value)) {
        //     message.warning('账号格式错误');
        //     return loginFlag = false;
        // }
        return loginFlag = true;
    },
    handlePWBlur(value) {
        if(!value) {
            message.warning('请输入密码');
            return loginFlag = false;
        }
        return loginFlag = true;
    },
    handleNameFocus() {
        loginFlag = true;
    },
    handlePWFocus() {
        loginFlag = true;
    },
    login(userName, passWord) {
        if(!loginFlag) {
            return loginFlag = false;
        }
        if(!userName && !passWord) {
            message.warning('请输入账号和密码');
            return loginFlag = false;
        }
        if(!userName) {
            message.warning('请输入账号');
            return loginFlag = false;
        }
        if(!passWord) {
            message.warning('请输入密码');
            return loginFlag = false;
        }
        
        loginFlag && dispatch(action.loginConfirm(userName, passWord, ownProps.history));
    }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));