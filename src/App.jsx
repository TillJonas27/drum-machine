import React from 'react'
import './App.css'
import DrumSettings from "./components/DrumSettings"
import DrumBoard from './components/DrumBoard'
import ToggleButton from "./ToggleButton.jsx"

function App() {
  const [power, setPower] = React.useState(true)
  const [bank, setBank] = React.useState(false)
  const [currentSound, setCurrentSound] = React.useState({})
  const [volume, setVolume] = React.useState(50)
  
  function togglePower() {
    setPower(old => !old)
  }

  function toggleBank() {
    if (power) {
      setBank(old => !old)
    }
  }

  function updateSound(sound) {
    if (power) {
      setCurrentSound(sound)
      let newSound = new Audio(sound.url)
      newSound.volume = volume / 100
      newSound.play()
    }
  }

  function updateVolume(event) {
    if (power) {
      setVolume(event.target.value)
    } 
  }
  
  return (
    <div>
       <a href="https://webfabrik.substack.com/p/markdown-app?sd=pf" target="_blank"><i className="fa-solid fa-info"></i></a>
      <a target="_blank" href="https://github.com/TillJonas27/" ><i className="fa-brands fa-github"></i></a>
      <div id="drum-machine" className="border">
        <DrumBoard bank={bank} currentSound={currentSound} updateSound={updateSound}/>
        <DrumSettings volume={volume} updateVolume={updateVolume} currentSound={currentSound}> 
          <ToggleButton label="Power" checkedValue={power} clickHandler={togglePower}/>
          <ToggleButton label="Bank" checkedValue={bank} clickHandler={toggleBank}/>
        </DrumSettings>
      </div>
    </div>
  )
}

export default App
