import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action } from '../store';
import { MenuWrapper, MenuItem } from '../style';

class LeftMenu extends Component {
    render() {
        const { menuPath, menuList, handleMenu } = this.props;
        return (
            <MenuWrapper>
                <div className='menu_box'>
                {
                    menuList.map((item) => (
                        <MenuItem key={item.get('id')} className={ menuPath === item.get('id') ? 'selected_color' : ''} onClick={() => handleMenu(item.get('path'), item.get('id'))}>
                            <i className={`iconfont ${item.get('iconfont')}`}></i>
                            <p className='menu_name'>{item.get('name')}</p>
                        </MenuItem>
                    ))
                }
                </div>
            </MenuWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    menuPath: state.getIn(['home', 'menuPath']),
    menuList: state.getIn(['home', 'menuList'])
});

const mapDispatchToProps = (dispatch, oweProps) => ({
    handleMenu(path, id) {
        localStorage.setItem('menuPath', id);
        dispatch(action.menuPathChange(id));
        oweProps.history.push(path);
    }
    
});
// withRouter有一下两种写法
// 1 这种写法才可以获取到路径信息 即mapDispatchToProps 的 oweProps 可以获取到此组件的信息
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftMenu));

// 2 这种情况下 mapDispatchToProps 的 oweProps 获取不到
// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftMenu));