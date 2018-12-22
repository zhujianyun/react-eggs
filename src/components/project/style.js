import styled from 'styled-components';

export const GuiderWrapper = styled.div`
    width: 700px;
    height: 100%;
    margin: 0 auto;
    margin-top: 60px;
    .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.7;
        text-align: center;
    }
    .desc {
        font-size: 15px;
        line-height: 23px;
        margin: 30px 0;
        text-align: center;
    }
    .enter_sure {
        width: 164px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        color: #fff;
        background: #3684FF;
        font-size: 14px;
        text-align: center;
        border-radius: 4px;
        margin-top: 40px;
        cursor: pointer;
    }
`;

export const VideoWrapper = styled.div`
    text-align: center;
    width: 700px;
    box-shadow:0px 1px 5px 0px rgba(95,95,95,0.5);
    border-radius:4px;
    video {
       width: 700px;
       max-height:414px;
       border-radius:4px;
       display: block;
    }
`;

export const ProjectListWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`; 
export const ProjectListTop = styled.div`
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #f2f2f2;
    .one {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        margin-left: 24px;
        margin-right: 20px;

    }
    .two {
        display: inline-block;
        width: 95px;
        height: 30px;
        line-height: 30px;
        background: #3684FF;
        border-radius: 4px;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
   
`;
export const ProjectListMain = styled.div`
    width: 100%;
    height: calc(100% - 51px);
    overflow: auto;
    padding-left: 24px;
    padding-top: 24px;
    box-sizing: border-box;
`;
export const ProjectListGroup = styled.div`
    width: 100%;

`;
export const GroupTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;
export const GroupList = styled.div`
    margin-top: 14px;
    margin-left: -45px;
    width: 100%;
    overflow: hidden;
    padding-top: 10px;

`;
export const GroupListItem = styled.div`
    margin-left: 45px;
    margin-bottom: 30px;
    width: 270px;
    height: 150px;
    background: #fff;
    box-shadow:0px 0px 4px rgba(126,126,126,0.5);
    border-radius:4px;
    float: left;

    /* 暂时的 */
    text-align: center;
    padding-top: 20px;
    box-sizing: border-box;
    color: #999;
`;