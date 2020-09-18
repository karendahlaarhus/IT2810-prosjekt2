

import React, { useState, useEffect } from "react";
import { JsxAttribute, JsxChild } from "typescript";
import BusSvg from './ArtWork/BusSvg';
import HeadWindow from './ArtWork/HeadWindow';
import Tree from './ArtWork/Tree';

interface Props {
    count: number;
  }

export default function ArtDisplay(props: Props){
    const [error, setError] = useState(null);
    const artworks: any = [
        <BusSvg></BusSvg>,<HeadWindow></HeadWindow>,
            <Tree></Tree>
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
    

