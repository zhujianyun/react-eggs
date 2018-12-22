import styled from 'styled-components';
import LoginBg from '../../statics/image/bg.svg';
import LogoPic from '../../statics/image/egLogo_small.png';
export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    /* background: url(${LoginBg}) no-repeat; */
    /* background-size: contain; */
    .grid_bg {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: -webkit-linear-gradient(top, transparent 179px, #f0f0f0 180px),
        -webkit-linear-gradient(left, transparent 179px, #f0f0f0 180px);
        background-size: 180px 180px;
    }
    position: relative;
    
`;

export const LoginHeader = styled.div`
    height: 70px;
    line-height: 70px;
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;

    .logo_pic {
        width: 86px;
        height: 24px;    
        background: url(${LogoPic}) no-repeat;
        background-size: contain;
        vertical-align: middle;
        display: inline-block;
        margin-left: 24px;
    }
    .login_register {
        margin-left: 22px;
        color: #ADADAD;
        float: right;
        font-size: 14px;
        cursor: pointer;
    }
    .selected {
        text-decoration: underline;
    }
`;
export const LoginMain = styled.div`
    width: 320px;
    margin: 0 auto;
    height: 400px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    .title {
        font-size: 18px;
        text-align: center;
        margin-bottom: 10px;

    }
    .group_input {
        margin-top: 18px;
        input {
            width: 320px;
            height: 32px;
            border-bottom: 1px solid #999;
            padding-left: 6px;
            box-sizing: border-box;
            &::placeholder {
                color: #999;
            }
        }
    }
    .login_opereat {
        margin-top: 26px;
        .checkbox {
            width: 16px;
            height: 16px;
            margin-left: 10px;
           .ant-checkbox-input {
               margin: 0 !important;
               width: 16px;
               height: 16px;
           }
           
        }
        .checkbox_name {
            color: #999;
        }
        .right {
            margin-right: 10px;
            float: right;
            span {
                color: #999;
                cursor: pointer;
            }
            .line {
                margin-right: 8px;
            }
        }
    }
    .login_sure {
        margin-top: 30px;
        width: 320px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 4px;
        cursor: pointer;
        span {
            color: #666;
            cursor: pointer;
        }
        .iconfont {
            color: #999;
            margin-left: 10px;
            font-size: 16px;
        }
        &:hover {
            background: #F5F5F5;
        }
    }
    .other_login {
        margin-top: 70px;
        p {  
            color: #999;
            text-align: center;
            margin-top: 20px;
        }
        .iconfont {
            font-size: 40px;
            color: #999;
            text-align: center;
            cursor: pointer;
           &:hover {
            color: #00C90B;
           }
        }
    }
`;