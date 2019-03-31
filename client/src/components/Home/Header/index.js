import React from "react";
import { Layout, Dropdown, Menu, Typography, Icon } from "antd";
import styled from "styled-components";

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

export default ({ logout, currentUser }) => (
  <Header>
    <Title>evernode</Title>
    <Title>
      <Dropdown overlay={<Menu>
        <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>}>
        <a className="ant-dropdown-link" href="#">
          <UserName>{currentUser.first_name}</UserName>
          <Icon type="down" style={{ fontSize:15 }} />
        </a>
      </Dropdown>
    </Title>
  </Header>
);
