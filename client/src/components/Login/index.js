import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { User } from "utils/api";
import { login } from "actions/authentication_actions";

class Login extends React.Component {
  // onSuccess = ({ code }) => {
  //   User.login({ code }).then(({ data }) => {
  //     User.fetch(JSON.parse(atob(data.auth_token.split(".")[1])).user_id).then(res => {
  //       debugger
  //     })
  //     localStorage.setItem("evernodeToken", data.auth_token)
  //   });
  // }

  render() {
    console.log(this.props);
    return (
      <Grid>
        <Cell>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            responseType="code"
            scope="openid email"
            accessType="offline"
            onSuccess={this.props.loginUser}
          />
        </Cell>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({ loginUser: () => dispatch(login()) });

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
