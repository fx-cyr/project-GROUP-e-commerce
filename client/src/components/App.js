import React from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../Global/GlobalStyles";

function App() {
  return (
    <div>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <Header />
    </div>
  );
}

export default App;
