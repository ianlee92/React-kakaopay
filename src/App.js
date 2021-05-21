import React from "react";
import PayReady from "./PayReady";
import PayResult from "./PayResult";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // BrowserRouter가 url에 따라 설정된 컴포넌트를 반환시킨다.
      <BrowserRouter>
        <Route path="/" exact={true} component={PayReady} />
        {/* 결제 승인이 진행될 PayResult를 설정한다. */}
        <Route path="/payresult" component={PayResult} />
      </BrowserRouter>
    );
  }
}
export default App;