import React from "react";
import { connect } from "react-redux";
import { List as AntList, Typography, Button } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { toggleForm } from "actions/ui_actions";
import CanvasForm from "./CanvasForm"

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({ toggle: () => dispatch(toggleForm()) });

const List = styled(AntList)`
  background: white;
  border-radius: 4px;
  padding: 24px;
  grid-area: 2 / 2;
  align-self: flex-start;
`;

const Header = ({ toggle }) => (
  <>
    <Typography.Title level={4}>Your Canvases</Typography.Title>
    <Button type="primary" onClick={toggle}>New Canvas</Button>
    <CanvasForm />
  </>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ toggle }) => (
  <List
  header={<Header toggle={toggle} />}
  dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
  pagination={{ total: 10, pageSize: 5 }}
  renderItem={n => (
    <List.Item key={n}>
      <List.Item.Meta
        title={<NavLink to={`/${n}`}>{`Something ${n}`}</NavLink>}
        description="some more text"
      />
    </List.Item>
  )}
  />
));
