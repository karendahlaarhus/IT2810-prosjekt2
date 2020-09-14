import React from "react";
import Buttons from "./Buttons";
//import Icon from "../svg/my_svg";

export default function Gallery() {
  return (
    <div className="gallery">
      <p>Gallery comes here</p>
      <Buttons></Buttons>
      <img alt="SVG displayed here" src={"http://s.cdpn.io/3/kiwi.svg"} />
    </div>
  );
}
