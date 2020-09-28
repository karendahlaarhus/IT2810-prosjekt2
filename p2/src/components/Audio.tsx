import React, { useState, useEffect } from "react";

interface Props {
  music: boolean;
}

  export default function Audio(this: any, props: Props) {
  //Sets default audiofile
  const [audio, setAudio] = useState(require('../assets/media/bensound-buddy.mp3'))
  const audioRef = React.useRef<HTMLAudioElement>(null); 
  

  /*Checks which value the music prop has, and sets the audio accordingly.  
  Because of caching the audioelement cannot just get a new src to change the music being playes, it needs to be loaded each time. 
  Therefore we have used audioRef, to make sure the correct audio is loaded each time the music prop changes value. */
  useEffect(() => {
  props.music ? setAudio(require('../assets/media/bensound-buddy.mp3')) : setAudio(require('../assets/media/bensound-creepy.mp3'));
  if (audioRef.current) {
    audioRef.current.load();
  } 
  console.log(props.music)
  }, [props.music])
  
  return (
      <div id="audioWrapper">
        <audio controls ref={audioRef} >
          <source src={audio}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }


