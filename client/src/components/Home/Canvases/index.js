import React from "react";
import { List, Row, Col } from "antd";
import styled from "styled-components";

export default ({ data }) => (
  <Row type="flex" justify="center">
  <Col span={12}>
  <List>
  {
    // data.map(canvas => (
      <List.Item>
        <List.Item.Meta
          title="Something"
          description="some more text"
        />
      </List.Item>
    // ))
  }
  </List>
  </Col>
  </Row>
);
