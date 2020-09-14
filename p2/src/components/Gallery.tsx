import React from "react";
import Buttons from "./Buttons";
import Poetry from "./Poetry";
//import Icon from "../svg/my_svg";

export default function Gallery() {
  return (
    <div className="gallery">
      <p>Gallery comes here</p>
      <Buttons></Buttons>
      <Poetry></Poetry>
      <div>
        <button>Picture 1</button>
        <button>Picture 2</button>
        <button>Picture 3</button>
        <button>Picture 4</button>
        <button>Picture 5</button>
      </div>
    </div>
  );
}
