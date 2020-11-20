import React from "react";
import { GlobalStyle } from "../Global/GlobalStyles";
import { PurchaseModal } from "./PurchaseModal/PurchaseModal";

function App() {
  return (
    <div>
      {/* Css Reset + general font-style */}
      
      <PurchaseModal />
      <GlobalStyle />
    </div>
  );
}

export default App;
