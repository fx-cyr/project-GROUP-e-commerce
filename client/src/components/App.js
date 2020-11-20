import React from "react";

import { GlobalStyle } from "../Global/GlobalStyles";
import ItemDetails from "./ItemDetails";

function App() {
  return (
    <div>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <ItemDetails />
    </div>
  );
}

export default App;
