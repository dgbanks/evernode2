import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Layout, Spin, Icon } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";
import { fetchCurrentUser } from "actions/current_user_actions";
import Header from "./Header";
import Canvases from "./Canvases";

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (props.isAuthenticated && !props.currentUser.fetching) {
      props.fetchCurrentUser();
    }
  }

  render() {
    const { currentUser, logout } = this.props;
    // debugger
    if (currentUser.fetching || !currentUser.data) {
      return (
        <Layout style={{ height: "100vh", justifyContent: "center" }}>
          <Spin indicator={<Icon type="loading" spin style={{ fontSize: 75 }} />} />
        </Layout>
      )
    }

    return (
      <Layout style={{ height: "100vh" }}>
      <Header logout={logout} currentUser={currentUser.data} />
      <Layout style={{ height: "calc(100vh - 112px)" }}>
        <Canvases data={currentUser.data.canvases} />
      </Layout>
      <Layout.Footer>
      </Layout.Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  currentUser: state.currentUser
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchCurrentUser: () => dispatch(fetchCurrentUser())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
