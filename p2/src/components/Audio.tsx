import React, { useState } from "react";



export default function Audio() {
  const [error, setError] = useState(null);
  const audio = require('../assets/media/bensound-buddy.mp3');

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div className="audioWrapper">
        <audio controls >
          <source src={audio}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}


