import React, { useState, useEffect } from "react";
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
import { Partners } from "./Partners/Partners";
import { AboutUs } from "./AboutUs/AboutUs";

function App() {
  const [category, setCategory] = useState("all");

  //Fetching companies data
  const [allCompanies, setAllCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("/api/companies");
      const json = await res.json();
      if (res.ok) {
        setAllCompanies(json.companies);
      }
    } catch {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <Router>
      {/* Css Reset + general font-style */}
      <GlobalStyle />

      <HeaderWrapper>
        <Header category={category} />
      </HeaderWrapper>

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
          <AboutUs />
        </Route>
        <Route path="/partners">
          <Partners allCompanies={allCompanies} />
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
