import React, { useState, useEffect } from "react";

interface Props {
  music: boolean;
}

export default function Audio(this: any, props: Props) {
  const [error, setError] = useState(null);
  const [audio, setAudio] = useState(require('../assets/media/bensound-buddy.mp3'))
  const audioRef = React.useRef<HTMLAudioElement>(null);
  //const audio = props.music ? require('../assets/media/bensound-buddy.mp3') : require('../assets/media/bensound-creepy.mp3') ;
  
  useEffect(() => {
    props.music ? setAudio(require('../assets/media/bensound-buddy.mp3')) : setAudio(require('../assets/media/bensound-creepy.mp3'));
    if (audioRef.current) {
      audioRef.current.load();
    } 
    console.log(props.music)
  }, [props.music])
  

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div id="audioWrapper">
        <audio controls ref={audioRef} >
          <source src={audio}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}


