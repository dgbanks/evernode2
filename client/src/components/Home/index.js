import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Layout, Spin, Icon } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";
import { fetchCurrentUser } from "actions/current_user_actions";
import Header from "./Header";
import Canvases from "./Canvases";

const LargeIcon = styled(Icon)`font-size: 75px`;
const Body = styled(Layout)`
  height: calc(100vh - 112px);
  display: grid;
  grid-template-columns: 25% 50% 25%;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (props.isAuthenticated && !props.currentUser.fetching) {
      props.fetchCurrentUser();
    }
  }

  render() {
    const { currentUser, logout } = this.props;

    if (currentUser.fetching || !currentUser.data) {
      return (
        <Layout style={{ height: "100vh", justifyContent: "center" }}>
          <Spin indicator={<LargeIcon type="loading" spin />} />
        </Layout>
      )
    }

    return (
      <Layout style={{ height: "100vh" }}>
      <Header logout={logout} currentUser={currentUser.data} />
      <Body>
        <Canvases data={currentUser.data.canvases} />
      </Body>
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
