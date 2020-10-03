import React from 'react';
import './app.css';
import Header from "./header/header";
import Footer from "./footer/footer";
import Viewer from "./views/viewer";



function App() {
  return (
  <div>
	  <Header/>
	    <Viewer  toDisplay="infoSeminar" />
	  <Footer/>
  </div>
  );
}

export default App;
