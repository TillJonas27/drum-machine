import React from "react"

export default function DrumSettings(props) {
    return (
      <div id="settings" className="">
      {props.children[0]}
      <div id="display">{props.currentSound.name}</div>
      <label for="volume">
        <b>Volume</b>
      </label>
      <input name="volume" type="range" value={props.volume} min="1" max="100" className="slider" id="volume" onChange={props.updateVolume}></input>
      {props.children[1]}
      </div>
    )
  }