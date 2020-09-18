import React, { useState } from "react";
import $ from 'jquery'; 
import BusSvg from './ArtWork/BusSvg'

function Buttons() {
  const [changePoem] = useState(0);

  function handleColors() {
   //TODO: endre farge på bikube
    jQuery(function() { 
      if ($(".hive").attr("fill") == "#ffc966" ){
        $(".hive").attr({ fill: "#917b53" }); 
      }
      else{
        $(".hive").attr({ fill: "#ffc966" }); 
      }
    });
  }


  function handleMusic() {
    return 0; //TODO: endre musikk
  }
  function handlePoetry() {
    return 0; //TODO: endre dikt
  }

  return (
    <div id="buttons_interaction">
      <button className="button_interaction" onClick={handleColors}>
        Colors
      </button>
      <button className="button_interaction" onClick={handleMusic}>
        Music
      </button>
      <button className="button_interaction" onClick={handlePoetry}>
        Poetry
      </button>
    </div>
  );
}

export default Buttons;
