import React from 'react';
import "antd/dist/antd.less";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import Store from "store";
import Login from "components/Login";
import Home from "components/Home";

// class App extends React.Component {
//   render() {
//     console.log(this.props);
const App = ({ authentication: { currentUser, authenticated, fetching } }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/login"
        render={props => {
          if (!authenticated) {
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
          if (authenticated) {
            return <Home {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
    </Switch>
  </BrowserRouter>
);

    // return (
//       <BrowserRouter>
//         <Switch>
//           <Route
//             exact
//             path="/login"
//             render={props => {
//               if (this.props.) {
//
//               }
//             }}
//           />
//           <AuthenticatedRoute exact path="/" component={Home} />
//           <UnauthenticatedRoute exact path="/login" component={Login} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

const mapStateToProps = ({ authentication }) => ({ authentication });
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      if (localStorage.getItem("evernodeToken")) {
        return <Component {...props} />
      } else {
        return <Redirect to="/login" />
      }
    }}
  />
);

const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      console.log(props);
      if (localStorage.getItem("evernodeToken")) {
        return <Redirect to="/" />
      } else {
        return <Component {...props} />
      }
    }}
  />
);
