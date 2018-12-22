import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    RightItem,
    OperateItem,
    UserItem
} from '../style';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <RightItem>
                    <OperateItem>
                        <i className='iconfont'>&#xe678;</i>
                        <span className='line_between'></span>
                    </OperateItem>
                    <OperateItem>
                        <i className='iconfont'>&#xe624;</i>
                        <span className='line_between'></span>
                    </OperateItem>
                    <OperateItem>
                        <i className='iconfont'>&#xe8aa;</i>
                        <span className='line_between'></span>
                    </OperateItem>
                    <UserItem>
                        <img className='user_header' src='' alt='' />
                        <span className='user_name'>祝建云</span>
                        <i className='iconfont'>&#xe74a;</i>
                    </UserItem>

                </RightItem>
            </HeaderWrapper>
        )
    }
}

export default Header;