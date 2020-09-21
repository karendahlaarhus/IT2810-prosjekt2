//Source: https://reactjs.org/docs/faq-ajax.html

/* 
Hvordan laste ned ulike dikt: 
1) Lag et array med alle url'ene, hent den du vil ha basert på indeks
2) Finn en url med mange dikt, hent ulike dikt fra siden basert på indeks

Viktig at man ikke henter diktene før det er behov for det, siden skal lastes dynamisk

*/

import React, { useState, useEffect } from "react";

interface Props {
  count: number;
}

export default function Poetry(props: Props) {
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);
  const poems: string[] = [
    "https://poetrydb.org/author,title/Bronte;Robbed/lines.json",
    "https://poetrydb.org/author,title/Bronte;Retirement/lines.json",
    "https://poetrydb.org/author,title/Finch;Myselfe/lines.json",
    "https://poetrydb.org/author,title/Jonson;Shadows/lines.json",
    "https://poetrydb.org/author,title/Bronte;Friendship/lines.json"
  ];

  useEffect(() => {
    fetch(poems[props.count])
      .then(response => response.json())
      .then(
        data => {
          setContents(data);
        },
        error => {
          //TODO: gjør noe med error
        }
      );
  }, [poems[props.count]]);

  if (error) {
    return <div>Error: </div>;
  } else {
    return (
      <div className="poetry">
        {contents[0].lines.map(line => (
          <p>{line}</p>
        ))}
      </div>
    );
  }
}
