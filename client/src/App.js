import React from 'react';
import "antd/dist/antd.less";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "components/Login";
import Home from "components/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" render={() => (
            localStorage.getItem("token") ? <Home /> : <Redirect to="/login" />
        )} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    );
  }
}

export default App;
