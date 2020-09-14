import React, { Component } from "react";
const soundfile = require('../assets/media/bensound-ukulele.mp3');


export default class Audio extends Component {
  render() {
    return ( 
    <div className='audioWrapper'>
        <audio controls>
            <source src={soundfile}  type='audio/mpeg'/>
        </audio>
    </div>
    )
  }
}

