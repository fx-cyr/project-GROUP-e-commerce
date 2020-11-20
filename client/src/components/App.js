import React from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../Global/GlobalStyles";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <Router>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      {/* TODO Add defensive turnary operator  */}

      <Switch>
        <Route exact path="/">
          <div>{/* Add home page component  */}Main Content</div>
        </Route>
        <Route path="/about">
          <div>{/* Add home page component  */}About Us Content</div>
        </Route>
        <Route path="/partners">
          <div>{/* Add home page component  */}Our Partners</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const HeaderWrapper = styled.div``;
