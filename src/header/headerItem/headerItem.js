import React from "react";

export default function headerItem(props) {
  return (
    <li>
      <a onClick={() => props.onClick(props.text)}>{props.text}</a>
    </li>
  );
}
