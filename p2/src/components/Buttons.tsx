import React, { useState } from "react";

interface Props{
  handleMusic: () => void
}

function Buttons(props: Props) {
  const [changePoem] = useState(0);

  function handleColors() {
    //TODO: endre farge på bikube
  }

  function handlePoetry() {
    return 0; //TODO: endre dikt
  }

  return (
    <div id="buttons_interaction">
      <button className="button_interaction" onClick={handleColors}>
        Colors
      </button>
      <button className="button_interaction" onClick={props.handleMusic}>
        Music
      </button>
      <button className="button_interaction" onClick={handlePoetry}>
        Poetry
      </button>
    </div>
  );
}

export default Buttons;
