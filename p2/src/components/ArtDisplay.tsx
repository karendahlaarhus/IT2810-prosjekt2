

import React, { useState, useEffect } from "react";
import { JsxAttribute, JsxChild } from "typescript";
import BusSvg from './ArtWork/BusSvg';
import Plane from './ArtWork/plane';
import HeadWindow from './ArtWork/HeadWindow';
import Tree from './ArtWork/Tree';
import BeeHive from "./ArtWork/BeeHive";

interface Props {
    count: number;
  }

export default function ArtDisplay(props: Props){
    const [error, setError] = useState(null);
    const artworks: any = [
        <BusSvg></BusSvg>,<HeadWindow></HeadWindow>,
            <Tree></Tree>,<Plane></Plane>,<BeeHive></BeeHive>
    ];
    
    
    if (error) {
    return <div>Error: </div>;
    } else {
    return (
        <div className="artworks">
            {artworks[props.count]}
        </div>
    );
    }
}
    

