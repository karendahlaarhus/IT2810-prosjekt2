import React, { useState } from "react";

interface Props {
  music: boolean;
}

export default function Audio(this: any, props: Props) {
  const [error, setError] = useState(null);
  const audio = props.music === true ? require('../assets/media/bensound-buddy.mp3') : require('../assets/media/bensound-creepy.mp3') ;
  //const refs = React.createRef();

  /* const fixAudio = () => {
    this.pause();
    audio.load();
    audio.play();
  } */

  console.log(props.music)
  console.log(audio)
  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div id="audioWrapper">
        <audio controls >
          <source src={audio}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}


