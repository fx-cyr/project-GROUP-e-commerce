import React, { useState, useEffect } from "react";


import { GlobalStyle } from "../Global/GlobalStyles";


function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch("/bacon")
      .then((res) => res.json())
      .then((data) => setBacon(data));
  }, []);

  // return <div>{bacon ? bacon : `...where's my stuff?...`}</div>;

  return (
    <div>
      {/* Css Reset + general font-style */}
      <GlobalStyle />
      <PurchaseModal />
    </div>
  );
}

//Is thing working??

export default App;
