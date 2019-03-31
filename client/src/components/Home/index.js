import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Layout, Typography, Dropdown, Menu, Spin, Icon } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";
import { fetchCurrentUser } from "actions/current_user_actions";

const Header = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Typography.Title)`
  color: white !important;
  line-height: unset !important;
  margin: 0px !important;
`;

const UserName = styled.span`
  font-size: 20px;
  margin-right:5px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (props.isAuthenticated && !props.currentUser.fetching) {
      props.fetchCurrentUser();
    }
  }

  render() {
    const { currentUser } = this.props;

    if (currentUser.fetching || !currentUser.data) {
      return (
        <Layout style={{ height: "100vh", justifyContent: "center" }}>
          <Spin indicator={<Icon type="loading" spin style={{ fontSize: 75 }} />} />
        </Layout>
      )
    }

    return (
      <Layout style={{ height: "100vh" }}>
      <Header>
        <Title>evernode</Title>
        <Title>
          <Dropdown overlay={<Menu>
            <Menu.Item onClick={this.props.logout}>Logout</Menu.Item>
          </Menu>}>
            <a className="ant-dropdown-link" href="#">
              <UserName>{currentUser.data.first_name}</UserName>
              <Icon type="down" style={{ fontSize:15 }} />
            </a>
          </Dropdown>
        </Title>
      </Header>
      <Layout style={{ height: "calc(100vh - 112px)" }}>
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
