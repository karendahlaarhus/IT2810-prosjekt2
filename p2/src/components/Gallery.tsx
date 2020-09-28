import React, { Component } from "react";
import ArtDisplay from "./ArtDisplay";
import Poetry from "./Poetry";
import Audio from "./Audio";

export default class Gallery extends Component {
  state = {
    count: Number(sessionStorage.getItem("count") || 1),
    music: true,
    author: sessionStorage.getItem("author") || "johnson"
  };

  /**
   * Called everytime the user presses the arrow to the right.
   * We do not want the number to be greater than 4, hence it is setted to 0 if it does.
   * sessionStorage lets us retreive the current information when the page is reloaded.
   *
   * Since React uses time to update count's state, it was necessary to intermediate store the new state
   * in a different variable, which is then used to set the state.
   */
  handleNext = () => {
    if (this.state.count === 4) {
      this.setState({ count: 0 });
      sessionStorage.setItem("count", JSON.stringify(0));
    } else {
      const new_count = this.state.count + 1;
      this.setState({ count: new_count });
      sessionStorage.setItem("count", JSON.stringify(this.state.count + 1));
    }
  };

  /**
   * Similiar to handleNext, except that we do not want count's state to be lower than 0, hence it is set
   * to 4 everytime it does.
   */

  handlePrevious = () => {
    if (this.state.count === 0) {
      this.setState({ count: 4 });
      sessionStorage.setItem("count", JSON.stringify(4));
    } else {
      const new_count = this.state.count - 1;
      this.setState({ count: this.state.count - 1 });
      sessionStorage.setItem("count", JSON.stringify(new_count));
    }
  };

  /**
   * The music toggles between the values true and false, hence if the value is true, we
   * want it to be false, and the other way around.
   * Due to the same problem about React not updating the states fast enough,
   * it is created a local variable here as well, which is then used to check which
   * boolean value we need to store in session storage.
   */

  handleMusic = () => {
    this.setState({ music: !this.state.music});
    const new_music = !this.state.music;
    console.log("new music: " + new_music);
    sessionStorage.setItem("audio", JSON.stringify(new_music));
  };

  componentDidMount(){
    const music = sessionStorage.getItem('audio');
    if (music){
      this.setState({count: Number(sessionStorage.getItem("count") || 1),
      music: JSON.parse(music),
      author: sessionStorage.getItem("author") || "johnson" })
    }
  }

  /**
   * Called everytime the user wants to change author.
   * Sets the state of the author to the oppsite of the current author,
   * and stores the information in session storage.
   */
  handlePoetry = () => {
    if (this.state.author === "johnson") {
      this.setState({ author: "bronte" });
      const new_author = "bronte";
      sessionStorage.setItem("author", new_author);
    } else {
      this.setState({ author: "johnson" });
      const new_author = "johnson";
      sessionStorage.setItem("author", new_author);
    }
  };


  /**
   * handleFavorite the user save the information of the currently displayed art, music and poetry,
   * which it then can display later using the handleRetrieveFavorite. Uses local storage to save the props'
   * current states into keys by using the function setItem.
   */
  handleFavorite = () => {
    const { count, author, music} = this.state;
    localStorage.setItem("count", count.toString());
    localStorage.setItem("music", music.toString());
    localStorage.setItem("author", author);

  };

  handleRetrieveFavorite = () => {
    const countString = localStorage.getItem("count");
    const author = localStorage.getItem("author");
    const musicString = localStorage.getItem("music");
    var count;
    var music;

    /**
     * Since JSON does not let us parse a value that is possible null, we check that the value is not,
     * before we parse it back to a JavaScript object.
     */
    if (countString != null && musicString != null) {
      count = JSON.parse(countString);
      music = JSON.parse(musicString);
      this.setState({ count, author, music });
    }
  };


  render() {
    console.log("current count state: " + this.state.count);
    console.log("current music state: " + this.state.music);

    return (
      <div>
        <div id="buttons_interaction">
          <button className="button_interaction" onClick={this.handleMusic}>
            Change music
          </button>
          <button className="button_interaction" onClick={this.handlePoetry}>
            Change author
          </button>
          <button className="button_interaction" onClick={this.handleFavorite}>
            Save favorite
          </button>
          <button
            className="button_interaction"
            onClick={this.handleRetrieveFavorite}
          >
            Retrieve favorite
          </button>
        </div>
        <div className="gallery">
          <Audio music={this.state.music}></Audio>
          <div id="gallery-box">
            <button
              id="btnRound"
              className="button_interaction"
              onClick={this.handlePrevious}
            >
              &#8249;
            </button>
            <button
              id="btnRound"
              className="button_interaction"
              onClick={this.handleNext}
            >
              &#8250;
            </button>
          </div>

          <div id="gallery-box">
            <div id="box">
              <ArtDisplay count={this.state.count}></ArtDisplay>
              <Poetry
                count={this.state.count}
                author={this.state.author}
              ></Poetry>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
