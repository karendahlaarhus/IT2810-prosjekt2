import React, { useState } from "react";

function Buttons() {
  const [changePoem] = useState(0);

  function handleColors() {
    return 0; //TODO: endre farge
  }
  function handleMusic() {
    return 0; //TODO: endre musikk
  }
  function handlePoetry() {
    return 0; //TODO: endre dikt
  }

  return (
    <div>
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
