import React from "react";
import logo from "./logo.png";
import facebook from "./facebook-circular-logo.svg";
import twitter from "./twitter.svg";
import instagram from "./instagram.svg";
import global from "./global.svg";
import HeaderItem from "./headerItem/headerItem";

export default function header(props) {
  return (
    <div className="header">
      <div className="column">
        <div id="logo-i-social">
          <div id="logo-holder">
            <img alt="Logo" src={logo}></img>
          </div>

          <div id="titel-holder">
            <h1>Sing To Seminar</h1>
          </div>

          <div id="social-holder">
            <a href="https://www.facebook.com/">
              <img alt="Facebook" src={facebook}></img>
            </a>
            <a href="https://twitter.com/">
              <img alt="Twiter" src={twitter}></img>
            </a>
            <a href="https://www.instagram.com/">
              <img alt="Instagram" src={instagram}></img>
            </a>

            <a href="https://global.com/">
              <img alt="Global" src={global}></img>
            </a>
          </div>
        </div>

        <nav id="main-menu">
          <ul>
            <HeaderItem
              onClick={(text) => props.onClick(text)}
              text="HomePage"
            />
            <HeaderItem
              onClick={(text) => props.onClick(text)}
              text="Seminars"
            />
            <HeaderItem
              onClick={(text) => props.onClick(text)}
              text="InfoSeminar"
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}