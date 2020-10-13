import React, { useState } from "react";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Viewer from "./views/viewer";

function App() {
  const [menuItemClicked, setMenuItemClicked] = useState("HomePage");
  return (
    <div>
      <Header onClick={(text) => setMenuItemClicked(text)} />
      <Viewer toDisplay={menuItemClicked} />
      <Footer />
    </div>
  );
}

export default App;
