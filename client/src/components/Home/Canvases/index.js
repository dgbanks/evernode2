import React from "react";
import { List, Row, Col } from "antd";
import styled from "styled-components";

export default ({ data }) => (
  <Row type="flex" justify="center">
  <Col span={12}>
  <List>

      <List.Item>
        <List.Item.Meta
          title="Something"
          description="some more text"
        />
      </List.Item>
      <List.Item>
        <List.Item.Meta
          title="Whatever"
          description="some more text"
        />
      </List.Item>

  </List>
  </Col>
  </Row>
);
