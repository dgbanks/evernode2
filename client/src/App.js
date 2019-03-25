import React from 'react';
import "antd/dist/antd.less";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from "components/Login";
import Home from "components/Home";
import { authToken } from "utils/auth_token";

const App = ({ authentication: { isAuthenticated } }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login"
        render={props => {
          if (!isAuthenticated) {
            return <Login {...props} />
          } else {
            return <Redirect to="/" />
          }
        }}
      />

      <Route
        exact
        path="/"
        render={props => {
          if (isAuthenticated) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = ({ authentication }) => ({ authentication });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
