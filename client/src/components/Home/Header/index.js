import React from "react";
import { connect } from "react-redux";
import { Layout, Dropdown, Menu, Typography, Icon } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";

const Header = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Typography.Title)`
  line-height: unset !important;
  margin: 0px !important;
`;

const UserName = styled.span`
  font-size: 20px;
  margin-right:5px;
  color:white;
`;

const Arrow = styled(Icon)`
  font-size: 15px !important;
  color: white;
`;

const mapStateToProps = state => ({ currentUser: state.currentUser.data });
const mapDispatchToProps = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ logout, currentUser }) => (
  <Header>
    <Title>evernode</Title>
    <Title>
      <Dropdown overlay={<Menu>
        <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>}>
        <a>
          <UserName>{currentUser.first_name}</UserName>
          <Arrow type="down" />
        </a>
      </Dropdown>
    </Title>
  </Header>
));
