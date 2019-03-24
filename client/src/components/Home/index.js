import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";

class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Grid>
        <Cell>
          <Button type="primary" onClick={this.props.logout}>
            Logout
          </Button>
        </Cell>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  authentication: state.authentication
});
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 25% 25% 50%;
`;

const Cell = styled.div`
  grid-area: 2 / 2;
  place-self: center;
`;
