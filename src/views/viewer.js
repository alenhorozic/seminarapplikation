import React from "react";
import HomePage from "./homePage";
import Seminars from "./seminars";
import InfoSeminar from "./infoSeminar";

export default function viewer(props) {
  switch (props.toDisplay) {
    case "HomePage":
      return (
        <>
          <HomePage />
        </>
      );
    case "Seminars":
      return (
        <>
          <Seminars />
        </>
      );
    case "InfoSeminar":
      return (
        <>
          <InfoSeminar id={2} />
        </>
      );
  }
}
