import React, { Component } from "react";
import ArtDisplay from "./ArtDisplay";
import Buttons from "./Buttons";
import Poetry from "./Poetry";
import Audio from "./Audio";

export default class Gallery extends Component {
  //const [count, setCount] = useState(sessionStorage.getItem('count') || 0);

  state = {
    count: 0,
    music: true,
    author: "johnson"
  };

  /*   session = () => {
    console.log(this.state.count);
    console.log(this.state.author);

    if (this.state.count != 0) {
      this.setState({ count: sessionStorage.getItem("count") });
      this.setState({ author: sessionStorage.getItem("author") });
      console.log(this.state.count);
      console.log(this.state.author);
    }
  }; */

  handleNext = () => {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
    } else {
      this.setState({ count: this.state.count + 1 });
    }
    // sessionStorage.setItem("count", JSON.stringify(this.state.count)); TODO
  };

  handlePrevious = () => {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
    } else {
      this.setState({ count: this.state.count - 1 });
    }
    //sessionStorage.setItem("count", JSON.stringify(this.state.count)); TODO
  };

  handleMusic = () => {
    this.setState({music: !this.state.music})
  };
  handlePoetry = () => {
    if (this.state.author === "johnson") {
      this.setState({ author: "bronte" });
    } else {
      this.setState({ author: "johnson" });
    }
    //sessionStorage.setItem("author", this.state.author); TODO
  };

  handleColors = () =>{
    
  }

  handleFavorite = () => {
    const { count, author } = this.state;

    localStorage.setItem("count", count.toString());
    localStorage.setItem("author", author);
  };

  handleRetrieveFavorite = () => {
    const count_string = localStorage.getItem("count");
    const author = localStorage.getItem("author");
    var count;

    if (count_string != null) {
      count = JSON.parse(count_string);
    }
    this.setState({ count, author });
  };

  render() {
    return (
      <div>
        <button className="favorite" onClick={this.handleFavorite}>
          Save favorite
        </button>
        <button className="favorite" onClick={this.handleRetrieveFavorite}>
          Retrieve favorite
        </button>
        <div id="buttons_interaction">
          <button className="button_interaction" onClick={this.handleColors}>Colors</button>
          <button className="button_interaction" onClick={this.handleMusic}>Music</button>
          <button className="button_interaction" onClick={this.handlePoetry}>Change author</button>
        </div>
        <div className="gallery">
        <Audio music={this.state.music}></Audio>
        <div id='gallery-box'>
          <button id='btnRound' className="button_interaction" onClick={this.handlePrevious}>&#8249;</button>
            <div id='box'>
              <ArtDisplay count={this.state.count}></ArtDisplay>
              <Poetry count={this.state.count} author={this.state.author}></Poetry>
            </div>
          <button id='btnRound' className="button_interaction" onClick={this.handleNext}  >&#8250;</button>
        </div>
          
        </div>
      </div>
    );
  }
}
