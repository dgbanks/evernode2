import React from "react";
import GoogleLogin from "react-google-login";
import styled from "styled-components";
import { User } from "utils/api";

class Login extends React.Component {
  onSuccess = ({ code }) => {
    User.login({ code }).then(({ data }) => {
      User.fetch(JSON.parse(atob(data.auth_token.split(".")[1])).user_id).then(res => {
        debugger
      })
      localStorage.setItem("evernodeToken", data.auth_token)
    });
  }

  render() {
    return (
      <Grid>
        <Cell>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            responseType="code"
            scope="openid email"
            accessType="offline"
            onSuccess={this.onSuccess}
          />
        </Cell>
      </Grid>
    )
  }
}

export default Login;

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
