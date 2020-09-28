import React, { useState, useEffect } from "react";
import BusSvg from "./ArtWork/BusSvg";
import Airplane from "./ArtWork/Airplane";
import HeadWindow from "./ArtWork/HeadWindow";
import Tree from "./ArtWork/Tree";
import BeeHive from "./ArtWork/BeeHive";

interface Props {
  count: number;
}

export default function ArtDisplay(props: Props) {
  const [error] = useState(null);
  const artworks: any = [
    <BusSvg></BusSvg>,
    <HeadWindow></HeadWindow>,
    <Tree></Tree>,
    <Airplane></Airplane>,
    <BeeHive></BeeHive>
  ];

  if (error) {
    return <div>Error: </div>;
  } else {
    return <div className="artworks">{artworks[props.count]}</div>;
  }
}
