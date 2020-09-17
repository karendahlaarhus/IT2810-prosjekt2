import React, { Component } from "react";
import Gallery from "./Gallery";



export default class Frontpage extends Component {
  state = {
    title: 'Dette er fra state'
  }
  render() {
    return (
      <div className="frontpage">
        <div id="header">
          <h1>Your future interactive gallery</h1>
          <a href="#gallery">View gallery</a>
        </div>

        <div id="gallery">
          <Gallery></Gallery>
        </div>
      </div>
    );
  }
}
