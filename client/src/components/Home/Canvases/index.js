import React from "react";
import { connect } from "react-redux";
import { List as AntList, Typography, Button, Icon, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { toggleForm } from "actions/ui_actions";
import CanvasForm from "./CanvasForm"

const mapStateToProps = state => ({ canvases: state.canvases.data });
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
)(({ toggle, canvases }) => (
  <List
  header={<Header toggle={toggle} />}
  dataSource={canvases}
  pagination={{ pageSize: 5 }}
  renderItem={({ id, title }) => (
    <List.Item actions={[<Icon type="edit" />]}>
      <List.Item.Meta
        title={<NavLink to={`/${id}`}>{title}</NavLink>}
        description="some more text"
      />
    </List.Item>
  )}
  />
));
