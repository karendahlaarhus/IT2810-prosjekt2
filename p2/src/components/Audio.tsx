import React, { useState } from "react";


interface Props {
  count: number;
}


export default function Audio(props: Props) {
  const [error, setError] = useState(null);
  const audioList: any = [
    require('../assets/media/bensound-ukulele.mp3'),
    require('../assets/media/bensound-buddy.mp3'),
    require('../assets/media/bensound-creativeminds.mp3'),
    require('../assets/media/bensound-jazzyfrenchy.mp3'),
    require('../assets/media/bensound-littleidea.mp3')
  ];

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div className="audioWrapper">
        <audio controls autoPlay>
          <source src={audioList[props.count]}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}


