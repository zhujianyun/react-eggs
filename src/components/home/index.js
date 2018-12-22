import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './pages/header';
import LeftMenu from './pages/leftMenu';
import { Route } from 'react-router-dom';


import Personal from '../personal';
import Project from '../project';
import ProjectDetail from '../project/pages/projectDetail';
import File from '../file';


import { action } from './store';
import { HomeWrapper, MainWrapper } from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <Header />
                <LeftMenu />
                <MainWrapper>
                    <Route path='/personal' component={Personal}></Route>
                    <Route path='/project' exact component={Project}></Route>
                    <Route path='/project/projectDetail' component={ProjectDetail}></Route>
                    <Route path='/file' component={File}></Route>
                </MainWrapper>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        const list = this.props.menuList.toJS();
        this.props.pathChange(list);

    }
  
}
const mapStateToProps = (state) =>({
    menuPath: state.getIn(['home', 'menuPath']),
    menuList: state.getIn(['home', 'menuList'])
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    pathChange(list) {
        const path = ownProps.location.pathname;
        const localPath = localStorage.getItem('menuPath');
        const finds = list.find(ele => path.indexOf(ele.path) !== -1 );
        if(finds && finds.id !==Number(localPath)) {
            localStorage.setItem('menuPath', finds.id);
            dispatch(action.menuPathChange(finds.id));
        }

    }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));