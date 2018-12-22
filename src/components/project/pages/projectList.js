import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { action } from '../store';
import { 
    ProjectListWrapper, 
    ProjectListTop, 
    ProjectListMain, 
    ProjectListGroup,
    GroupTitle,
    GroupList,
    GroupListItem
} from '../style';
class ProjectList extends Component {
    render() {
        const { projectList, enterDetail } = this.props;
        return (
            <ProjectListWrapper>
                <ProjectListTop>
                    <div className='button one'>项目管理</div>
                    <div className='button two'>新建项目</div>
                </ProjectListTop>
                <ProjectListMain>
                    {
                        projectList.map(item => (
                            <ProjectListGroup key={item.get('id')}>
                                <GroupTitle>{item.get('name')}</GroupTitle>
                                <GroupList>
                                {
                                    item.get('list').map(ele => (
                                        <GroupListItem 
                                            key={ele.get('projectid')}
                                            onClick={() =>  enterDetail(ele.get('projectid'))}
                                            >
                                            {ele.get('title')}
                                        </GroupListItem>
                                    ))
                                }
                                </GroupList>
                                  
                            </ProjectListGroup>
                        ))
                    }
                    
                </ProjectListMain>
            </ProjectListWrapper>
        )
    }
    
    componentDidMount() {
        this.props.getProjectList();
    }
}
const mapStateToProps = (state) => ({
    projectList: state.getIn(['project', 'projectList']),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    getProjectList() {
        dispatch(action.getProjectList('1184'));
    },
    enterDetail() {
        ownProps.history.push('/project/projectDetail');
    }
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectList));