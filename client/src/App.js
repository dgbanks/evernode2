import React from 'react';
import "antd/dist/antd.less";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "store";
import Login from "components/Login";
import Home from "components/Home";

class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <Route exact path="/" render={() => (
              localStorage.getItem("token") ? <Home /> : <Redirect to="/login" />
          )} />
          <Route path="/login" component={Login} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
