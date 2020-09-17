import React, { useState, useEffect } from "react";


interface Props {
  count: number;
}


export default function Audio(props: Props) {
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);
  const audioList: string[] = [
    require('../assets/media/bensound-ukulele.mp3'),
    require('../assets/media/bensound-buddy.mp3'),
    require('../assets/media/bensound-creativeminds.mp3'),
    require('../assets/media/bensound-jazzyfrenchy.mp3'),
    require('../assets/media/bensound-littleidea.mp3')
  ];

  useEffect(() => {
    fetch(audioList[props.count])
      .then(response => response.json())
      .then(
        data => {
          setContents(data);
        },
        error => {
          //TODO: gjør noe med error
        }
      );
  }, [audioList[props.count]]);

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div className="audioWrapper">
        <audio controls>
          <source src={audioList[props.count]}  type='audio/mpeg'/>
        </audio>
      </div>
    );
  }
}


