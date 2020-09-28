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
  author: string;
}

export default function Poetry(props: Props) {
  const [contents, setContents] = useState([
    { lines: [""], author: [""], title: [""] }
  ]);
  const [error] = useState(null);
  var poems: string[] = [];

  const bronte: string[] = [
    "https://poetrydb.org/author,title/Bronte;Robbed/author,title,lines.json",
    "https://poetrydb.org/author,title/Bronte;Retirement/author,title,lines.json",
    "https://poetrydb.org/author,title/Bronte;Friendship/author,title,lines.json",
    "https://poetrydb.org/author,title/Bronte;Prayer/author,title,lines.json",
    "https://poetrydb.org/author,title/Bronte;Sympathy/author,title,lines.json"
  ];

  const johnson: string[] = [
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20To%20Diana/author,title,lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20To%20Celia%20-%20I/author,title,lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;That%20Women%20Are%20But%20Men's%20Shadows/author,title,lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20from%20The%20Silent%20Woman/author,title,lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;It%20Is%20Not%20Growing%20Like%20A%20Tree/author,title,lines.json"
  ];

  if (props.author === "bronte") {
    poems = bronte;
  } else if (props.author === "johnson") {
    poems = johnson;
  }

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
        <p>Author: {contents[0].author}</p>
        <p>Title: {contents[0].title}</p>
        <br></br>
        {contents[0].lines.map(line => (
          <p>{line}</p>
        ))}
      </div>
    );
  }
}
