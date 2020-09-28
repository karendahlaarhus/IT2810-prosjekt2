import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import { JsxAttribute, JsxChild } from "typescript";
>>>>>>> 34e398bd52f1b90cea344100e8a8b9a87e76793e
import BusSvg from "./ArtWork/BusSvg";
import Airplane from "./ArtWork/Airplane";
import HeadWindow from "./ArtWork/HeadWindow";
import Tree from "./ArtWork/Tree";
import BeeHive from "./ArtWork/BeeHive";
import { themes } from "./theme-context";
import { details } from "./theme-context";
import { orangeColor } from "./theme-context";
import { ThemeContext, DetailContext, OrangeContext } from "./theme-context";

interface Props {
  count: number;
}
<<<<<<< HEAD

export default function ArtDisplay(props: Props) {
  const [error] = useState(null);
=======

export default function ArtDisplay(props: Props) {
  const [theme, setTheme] = useState(themes.dark); //for context tutorial video
  const [detail, setDetail] = useState(details.color);
  const [orange, setOrange] = useState(orangeColor.on);

  // const toggleTheme = () =>
  //   theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  // detail === details.color
  //   ? setDetail(details.normal)
  //   : setDetail(details.color);

  function toggleTheme() {
    if (detail == details.color) {
      setTheme(themes.light);
      setDetail(details.normal);
      setOrange(orangeColor.off);
    } else {
      setTheme(themes.dark);
      setDetail(details.color);
      setOrange(orangeColor.on);
    }
  }

  const [error, setError] = useState(null);
>>>>>>> 34e398bd52f1b90cea344100e8a8b9a87e76793e
  const artworks: any = [
    <BusSvg></BusSvg>,
    <HeadWindow></HeadWindow>,
    <Tree></Tree>,
    <Airplane></Airplane>,
<<<<<<< HEAD
    <BeeHive></BeeHive>
  ];

  if (error) {
    return <div>Error: </div>;
  } else {
    return <div className="artworks">{artworks[props.count]}</div>;
  }
=======
    <BeeHive></BeeHive>,
  ];
  return (
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

  //   if (error) {
  //     return <div>Error: </div>;
  //   } else {
  //     return <div className="artworks">{artworks[props.count]}</div>;
  //   }
>>>>>>> 34e398bd52f1b90cea344100e8a8b9a87e76793e
}
