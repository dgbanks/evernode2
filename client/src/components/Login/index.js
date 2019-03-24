import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { login } from "actions/authentication_actions";

class Login extends React.Component {
  render() {
    console.log("RERENDERING LOGIN", this.props);
    return (
      <Grid>
        <Cell>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            responseType="code"
            scope="openid email"
            accessType="offline"
            onSuccess={this.props.login}
          />
        </Cell>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  // currentUser: state.authentication.currentUser,
  authentication: state.authentication
});
const mapDispatchToProps = dispatch => ({
  login: ({ code }) => dispatch(login(code))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));

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
