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
import 'bootstrap/dist/css/bootstrap.min.css';
import SeminarsAdministrator from "./views/seminarsAdministrator";
import InfoSeminarAdministrator from "./views/infoSeminarAdministrator";
import BookingsAdministrator from "./views/bookingsAdministrator";

export default function App() {
  return (
    <Router>
      <Header />
              <MenuLink link="/" name="HomePage" />
              <MenuLink link="/seminars" name="Seminars" />
              <MenuLink link="/infoSeminar" name="InfoSeminar" />     
        <Switch>
          <Route path="/bookingsAdministrator" component={BookingsAdministrator} />
          <Route path="/seminarsAdministrator" component={SeminarsAdministrator} />
          <Route path="/infoSeminarAdministrator/:id" component={InfoSeminarAdministrator} />
          <Route path="/seminars" component={Seminars} />
          <Route path="/infoSeminar/:id" component={InfoSeminar} />            
          <Route path="/" component={HomePage} />
        </Switch>
      <Footer />
    </Router>
  );
}
