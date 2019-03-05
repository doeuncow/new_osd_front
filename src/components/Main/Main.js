import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Icon } from "semantic-ui-react";
import ContentBox from "components/Commons/ContentBox";
import StyleGuide from "StyleGuide";
import ScrollTopDesignContainer from "containers/Commons/ScrollTopDesignContainer";
import MyDesignContainer from "containers/MyPage/MyDesignContainer";
import MyGroupContainer from "containers/MyPage/MyGroupContainer";
import MemberDesignContainer from "containers/MyPage/MemberDesignContainer";
import MyLikeDesignContainer from "containers/MyPage/MyLikeDesignContainer";
import MyLikeDesignerContainer from "containers/MyPage/MyLikeDesignerContainer";
import GetMyDetailRequest from "actions/Users/MyDetail.js"
import MainSlide from "./Slide";


// css styling

const ImgWrapper = styled.div`
`;

const TextWrapper = styled.div `
  padding-bottom: 50px;
`;

const Content = styled(ContentBox)`
@media only screen and (max-width: 991px) and (min-width: 768px){
  & .ui.grid>.row{
    margin-left: 6.25% !important;
  }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
`;

const Head = styled.div`
  color: ${StyleGuide.color.geyScale.scale7};
  font-size: ${StyleGuide.font.size.heading3};
  text-align: center;
  margin-bottom: 1rem;
`;


class Main extends Component {
  state = {
    profile: false,
    active: false,
    keyword: null
  };

  render() {
    const LoginNav = () => {
      return (
        <div>
          <Head>내 그룹</Head>
            <MyGroupContainer token={this.props.token}/>
          <br/>

          <Head>내 디자인</Head>
            <MyDesignContainer token={this.props.token}/>
          <br/>

          <Head>내가 관심있는 디자인</Head>
            <MyLikeDesignContainer token={this.props.token}/>
          <br/>

        </div>
      );
    };

    return (
      <div>
        <ImgWrapper>
          <MainSlide/>
        </ImgWrapper>
        <TextWrapper>
          <Content>
            <Wrapper>
              {this.props.valid ? <LoginNav /> : <div />}
              <Head>인기 디자인</Head>
              <ScrollTopDesignContainer/>
            </Wrapper>
          </Content>
        </TextWrapper>
      </div>
    );
  }
}

export default Main;
