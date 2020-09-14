//Source: https://reactjs.org/docs/faq-ajax.html

import React, { useState, useEffect } from "react";

export default function Poetry() {
  const url = "https://poetrydb.org/author,title/Taylor;Dance/lines.json";
  const [contents, setContents] = useState([{ lines: [""] }]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          setContents(data);
        },
        error => {
          //TODO: gjør noe med error
        }
      );
  }, [url]);

  console.log(contents);

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
