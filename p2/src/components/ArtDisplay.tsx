import React, { useState } from "react";
import BusSvg from "./ArtWork/BusSvg";
import Airplane from "./ArtWork/Airplane";
import HeadWindow from "./ArtWork/HeadWindow";
import Tree from "./ArtWork/Tree";
import BeeHive from "./ArtWork/BeeHive";
import { themes, details, orangeColor } from "./ThemeContext";
import { ThemeContext, DetailContext, OrangeContext } from "./ThemeContext";

/* Used for slideshow */
interface Props {
  count: number;
}

export default function ArtDisplay(props: Props) {

  const [theme, setTheme] = useState(themes.dark); //for setting context
  const [detail, setDetail] = useState(details.color); //for setting context
  const [orange, setOrange] = useState(orangeColor.on); //for setting context

  /* function used to toggle between diffrent themes declared in ThemesContext.tsx*/
  function toggleTheme() {
    if (detail === details.color) {
      setTheme(themes.light);
      setDetail(details.normal);
      setOrange(orangeColor.off);
      sessionStorage.setItem("themes", JSON.stringify(themes.light));
      sessionStorage.setItem("detail", JSON.stringify(details.normal));
      sessionStorage.setItem("orange", JSON.stringify(orangeColor.off));
    } else {
      setTheme(themes.dark);
      setDetail(details.color);
      setOrange(orangeColor.on);
      sessionStorage.setItem("themes", JSON.stringify(themes.dark));
      sessionStorage.setItem("detail", JSON.stringify(details.color));
      sessionStorage.setItem("orange", JSON.stringify(orangeColor.on));
    }
  }

  /* List for each artwork, used for slideshow */
  const artworks: any = [
    <BusSvg></BusSvg>,
    <HeadWindow></HeadWindow>,
    <Tree></Tree>,
    <Airplane></Airplane>,
    <BeeHive></BeeHive>,
  ];
  return (
    /*One provider for each created context,
    used for changing color with help from Context API */
    <OrangeContext.Provider value={orange}>
      <DetailContext.Provider value={detail}>
        <ThemeContext.Provider value={theme}>
          <div className="gallery">
            <div className="artworks">{artworks[props.count]}</div>
            <button onClick={toggleTheme}>Change color theme</button>
          </div>
        </ThemeContext.Provider>
      </DetailContext.Provider>
    </OrangeContext.Provider>
  );
}
