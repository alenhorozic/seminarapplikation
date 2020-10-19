import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";
import HomePage from "./views/homePage";
import InfoSeminar from "./views/infoSeminar";
import Seminars from "./views/seminars";
import MenuLink from "./header/MenuLink/menuLink";

export default function App() {
  return (
    <Router>
      <Header />
              <MenuLink link="/" name="HomePage" />
              <MenuLink link="/seminars" name="Seminars" />
              <MenuLink link="/infoSeminar" name="InfoSeminar" />     
        <Switch>
          <Route path="/seminars" component={Seminars} />
          <Route path="/infoSeminar/:id" component={InfoSeminar} />            
          <Route path="/" component={HomePage} />
        </Switch>
      <Footer />
    </Router>
  );
}
