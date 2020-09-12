import React, { Component } from "react";
import Gallery from "./Gallery";

export default class Frontpage extends Component {
  render() {
    return (
      <div className="frontpage">
        <h1>Art Work Gallery</h1>
        <p>Information and text to make the page look prettier </p> {/* TODO */}
        <Gallery></Gallery>
      </div>
    );
  }
}
