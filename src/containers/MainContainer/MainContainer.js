import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Main from "components/Main";
import { SignOutRequest } from "actions/Registration";
import { SetActive } from "actions/OpenDesign";
import { GetMyDetailRequest, GetMyDesignListRequest } from "actions/Users/MyDetail";

class MainContainer extends Component {
  componentWillMount() {
    this.props.GetMyDetailRequest(this.props.token);
  }

  render() {
    return(
      <Main {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    valid: state.Authentication.status.valid,
    userInfo: state.Authentication.status.userInfo,
    isActive: state.OpenDesign.isActive,
    MyDetail: state.MyDetail.status.MyDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SignOutRequest: () => {
      return dispatch(SignOutRequest());
    },
    SetActive: (active) => {
      return dispatch(SetActive(active))
    },
    GetMyDetailRequest: (token) => {
      return dispatch(GetMyDetailRequest(token));
    },
    GetMyDesignListRequest: (token, page) => {
      return dispatch(GetMyDesignListRequest(token, page));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainContainer));
