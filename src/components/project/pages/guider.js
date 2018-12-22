import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { GuiderWrapper, VideoWrapper } from '../style';
import { action } from '../store';
import videoSrc from '../../../statics/image/video2.mp4';
class Guider extends PureComponent {
    render() {
        const { guiderSure } = this.props;
        return (
            <GuiderWrapper>
                <h1 className='title'>HI 祝建云！欢迎使用Eggs</h1>
                <p className='desc'>您可以利用Eggs强大的团队协作和成果展示功能，帮助团队提高工作效率</p>
                <VideoWrapper>
                    <video src={videoSrc} controls='controls' >您的浏览器不支持 video H5 播放器</video>
                </VideoWrapper>
                <div className='enter_sure' onClick={guiderSure}>我知道了，进入项目</div>
            </GuiderWrapper>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    guiderSure() {
        dispatch(action.guiderShowChange(false));
    }
});

export default connect(null, mapDispatchToProps)(Guider);