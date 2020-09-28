import React, { useState, useEffect } from "react";

interface Props {
  music: boolean;
}

export default function Audio(this: any, props: Props) {
  const [error] = useState(null);
  const [audio, setAudio] = useState(
    require("../assets/media/bensound-buddy.mp3")
  );
  const audioRef = React.useRef<HTMLAudioElement>(null);
  //const audio = props.music ? require('../assets/media/bensound-buddy.mp3') : require('../assets/media/bensound-creepy.mp3') ;

  useEffect(() => {
<<<<<<< HEAD
    setAudio(require("../assets/media/bensound-buddy.mp3"));
    //props.music ? setAudio(require('../assets/media/bensound-buddy.mp3')) : setAudio(require('../assets/media/bensound-creepy.mp3'));

    if (audioRef.current) {
      audioRef.current.load();
    }

    console.log(props.music);
  }, [props.music]);
=======
    props.music ? setAudio(require('../assets/media/bensound-buddy.mp3')) : setAudio(require('../assets/media/bensound-creepy.mp3'));
    if (audioRef.current) {
      audioRef.current.load();
    } 
    console.log(props.music)
  }, [props.music])
  
>>>>>>> 34e398bd52f1b90cea344100e8a8b9a87e76793e

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div id="audioWrapper">
        <audio controls ref={audioRef}>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}
