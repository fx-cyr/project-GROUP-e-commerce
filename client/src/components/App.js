import React, { useState } from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../Global/GlobalStyles";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";
import { Homepage } from "./Homepage";
import ItemDetails from "./ItemDetails";

function App() {
  const [category, setCategory] = useState("all");

  return (
    <Router>
      {/* Css Reset + general font-style */}
      <GlobalStyle />

      <HeaderWrapper>
        <Header category={category} />
      </HeaderWrapper>

      {/* TODO Add defensive turnary operator  */}

      <Switch>
        <Route exact path="/">
          <Redirect to="/home/all" />
        </Route>
        <Route path="/home/:categoryId">
          <div>
            <Homepage category={category} setCategory={setCategory} />
          </div>
        </Route>
        <Route path="/about">
          <div>{/* Add home page component  */}About Us Content</div>
        </Route>
        <Route path="/partners">
          <div>{/* Add home page component  */}Our Partners</div>
        </Route>
        <Route path="/items/:itemId">
          <ItemDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

const HeaderWrapper = styled.div``;
