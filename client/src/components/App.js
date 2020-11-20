import React from "react";
import { Header } from "./Header";
import { GlobalStyle } from "../Global/GlobalStyles";
import ItemDetails from "./ItemDetails";
import PurchaseModal from "./PurchaseModal/PurchaseModal";

function App() {
  return (
    <div>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <ItemDetails />
      <Header />
      <PurchaseModal />
    </div>
  );
}

export default App;
