import React, { useState } from "react";
import BusSvg from "./ArtWork/BusSvg";

function Buttons() {
  const [changePoem] = useState(0);

  function handleColors() {
    //TODO: endre farge på bikube
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
