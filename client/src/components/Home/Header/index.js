import React from "react";
import { Layout, Dropdown, Menu, Typography, Icon } from "antd";
import styled from "styled-components";

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

export default ({ logout, currentUser }) => (
  <Header>
    <Title>evernode</Title>
    <Title>
      <Dropdown overlay={<Menu>
        <Menu.Item onClick={logout}>Logout</Menu.Item>
      </Menu>}>
        <a>
          <UserName>{currentUser.first_name}</UserName>
          <Arrow type="down"  />
        </a>
      </Dropdown>
    </Title>
  </Header>
);
