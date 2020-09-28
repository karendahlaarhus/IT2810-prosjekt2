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
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);
  var poems: string[] = [];
  var authorName;
  const bronte: string[] = [
    "https://poetrydb.org/author,title/Bronte;Robbed/lines.json",
    "https://poetrydb.org/author,title/Bronte;Retirement/lines.json",
    "https://poetrydb.org/author,title/Bronte;Friendship/lines.json",
    "https://poetrydb.org/author,title/Bronte;Prayer/lines.json",
    "https://poetrydb.org/author,title/Bronte;Sympathy/lines.json"
  ];

  const johnson: string[] = [
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20To%20Diana/lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20To%20Celia%20-%20I/lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;That%20Women%20Are%20But%20Men's%20Shadows/lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;Song%20from%20The%20Silent%20Woman/lines.json",
    "https://poetrydb.org/author,title/Ben%20Jonson;It%20Is%20Not%20Growing%20Like%20A%20Tree/lines.json"
  ];

  /*
  Updates the author name and its lists of poems depeding on the state of the prop 'author'
   */
  if (props.author === "bronte") {
    poems = bronte;
    authorName = "Anne Bronte";
  } else if (props.author === "johnson") {
    poems = johnson;
    authorName = "Ben Johnson";
  }

  /* Using AJAX to fetch poems from poetrydb.com.
   props.count is a number that changes everytime the user changes image in the slideshow, which
   is then used to index the correct poem from the list. 
   */
  useEffect(() => {
    fetch(poems[props.count])
      .then(response => response.json())
      .then(
        data => {
          setContents(data);
        },
        error => {
          setError(error);
        }
      );
  }, [poems,props.count]);

  if (error) {
    return <div>Error: {error}</div>;
  } else {
    return (
      <div className="poetry">
        <p>Author: {authorName}</p>
        <br />
        {contents[0].lines.map(line => (
          <p key={line}>{line}</p>
        ))}
        <br></br>
      </div>
    );
  }
}
