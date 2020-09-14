import React, { Component } from "react";
import Gallery from "./Gallery";


export default class Frontpage extends Component {
  state = {
    title: 'Dette er fra state'
  }
  render() {
    return (
      <div className="frontpage" onClick={() => this.setState({title: 'Dette er ny tittel'})}>
        <h1>{this.state.title}</h1>
        <p>Information and text to make the page look prettier </p> {/* TODO */}
        <Gallery></Gallery>
      </div>
    );
  }
}
