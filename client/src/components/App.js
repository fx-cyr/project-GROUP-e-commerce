import React from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../Global/GlobalStyles";
<<<<<<< HEAD
import ItemDetails from "./ItemDetails";
=======
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { Homepage } from "./Homepage";
>>>>>>> e64245339ce4e012a4f8afedd6adb353a1c5b575

function App() {
  return (
    <Router>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
<<<<<<< HEAD
      <Header />
      <PurchaseModal />
    </div>
=======
    
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      {/* TODO Add defensive turnary operator  */}

      <Switch>
        <Route exact path="/">
          <div>
            <Homepage />
          </div>
        </Route>
        <Route path="/about">
          <div>{/* Add home page component  */}About Us Content</div>
        </Route>
        <Route path="/partners">
          <div>{/* Add home page component  */}Our Partners</div>
        </Route>
      </Switch>
    </Router>
>>>>>>> e64245339ce4e012a4f8afedd6adb353a1c5b575
  );
}

export default App;

const HeaderWrapper = styled.div``;
