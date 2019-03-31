import React from "react";
import { List as AntList, Typography, Button, Modal } from "antd";
import styled from "styled-components";

const List = styled(AntList)`
  background: white;
  border-radius: 4px;
  padding: 24px;
  grid-area: 2 / 2;
  align-self: flex-start;
`;

const Header = () => (
  <>
    <Typography.Title level={4}>Your Canvases</Typography.Title>
    <Button type="primary">New</Button>
  </>
);

export default ({ data }) => (
  <List
  header={<Header />}
  dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  pagination={{ total: 10, pageSize: 5 }}
  renderItem={n => (
    <List.Item key={n}>
      <List.Item.Meta
        title={<Typography.Text>{`Something ${n}`}</Typography.Text>}
        description="some more text"
      />
    </List.Item>
  )}
  />
);
