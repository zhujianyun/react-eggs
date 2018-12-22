import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Guider from './pages/guider';
import ProjectList from './pages/projectList';
class Project extends Component {
    render() {
        return (
            <Fragment>
                { this.props.guiderShow ? <Guider /> : <ProjectList /> }
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    guiderShow: state.getIn(['project', 'guiderShow'])
});

export default connect(mapStateToProps, null)(Project);
