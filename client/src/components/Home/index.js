import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import styled from "styled-components";
import { logout } from "actions/authentication_actions";
import { fetchCurrentUser } from "actions/current_user_actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    if (props.isAuthenticated && !props.currentUser.fetching) {
      props.fetchCurrentUser()
      // .then(res => {
      //   debugger
      // })
    }
  }

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
