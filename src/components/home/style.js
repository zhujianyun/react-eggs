import styled from 'styled-components';
import LogoPic from '../../statics/image/egLogo_small.png';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const HeaderWrapper = styled.div`
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    /* box-sizing: border-box; */
`;

export const Logo = styled.div`
    width: 86px;
    height: 24px;    
    background: url(${LogoPic}) no-repeat;
    background-size: contain;
    vertical-align: middle;
    display: inline-block;
    margin-left: 24px;
`;
export const RightItem = styled.div`
   float: right;
   margin-right: 24px;
   height: 50px;
`;
export const OperateItem = styled.div`
   float: left;
   width: 56px;
   text-align: center;
   
   .line_between {
    width: 1px;
    height: 34px;
    background: #F2F2F2;
    float: right;
    margin-top: 7px;
   }
 
   .iconfont {
       text-align: center;
       color: #666;
       cursor: pointer;
       &:hover {
           color: #3684FF;
       }
   }
`;

export const UserItem = styled.div`
   float: left;
   padding-left: 18px;
   height: 50px;
   .user_header {
        width:28px;
        height:28px;
        border-radius: 4px;
        display: inline-block;
        vertical-align: middle;
        background: #969696;
        margin-top: -1px;
    }
    .user_name {
        vertical-align: middle;
        margin: 0 18px;
    }
    .iconfont {
        vertical-align: middle;
        color: #666;
        cursor: pointer;
        &:hover {
            color: #3684FF;
        }
   }
`;

export const MenuWrapper = styled.div`
   width: 100px;
   height: calc(100vh - 51px);
   background: #fff;
   border-right: 1px solid #eee;
   text-align: center;
   position: relative;
   float: left;
   .menu_box {
       width: 100px;
       position: absolute;
       top: 40%;
       transform: translateY(-50%);
   }
`;

export const MenuItem = styled.div`
    width: 100px;
    height: 70px;
    cursor: pointer;
    &:hover {
        .menu_name, .iconfont {
            color: #3684FF; 
        }
        
    }
    .menu_name {
        margin-top: 10px;
        color: #999;
        font-size: 14px;
    }
    .iconfont {
        color: #666;
    }
    &.selected_color {
        .menu_name, .iconfont {
            color: #3684FF; 
        }
    }
`;

export const MainWrapper = styled.div`
    width: calc(100% - 101px);
    height: calc(100vh - 51px);
    float: right;
    background: #FAFAFA;
`;