import React from "react";

import { GlobalStyle } from "../Global/GlobalStyles";

function App() {
  return (
    <div>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <PurchaseModal />
    </div>
  );
}

export default App;
