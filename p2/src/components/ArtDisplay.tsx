import React, { useState, useEffect } from "react";
import { JsxAttribute, JsxChild } from "typescript";
import BusSvg from "./ArtWork/BusSvg";
import Airplane from "./ArtWork/Airplane";
import HeadWindow from "./ArtWork/HeadWindow";
import Tree from "./ArtWork/Tree";
import BeeHive from "./ArtWork/BeeHive";
import Layout from "./Layout";
import ThemeContext, { themes } from "./theme-context";

interface Props {
  count: number;
}

export default function ArtDisplay(props: Props) {
  const [theme, setTheme] = useState(themes.dark); //for context tutorial video

  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);

  const [error, setError] = useState(null);
  const artworks: any = [
    <BusSvg></BusSvg>,
    <HeadWindow></HeadWindow>,
    <Tree></Tree>,
    <Airplane></Airplane>,
    <BeeHive></BeeHive>,
  ];
  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Change color theme</button>
      <div className="artworks">{artworks[props.count]}</div>
    </ThemeContext.Provider>
  );

  //   if (error) {
  //     return <div>Error: </div>;
  //   } else {
  //     return <div className="artworks">{artworks[props.count]}</div>;
  //   }
}
