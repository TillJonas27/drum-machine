import React from "react"
import audios1 from "../audios"
import audios2 from "../audios2"
import DrumPad from "./DrumPad"

export default function DrumBoard(props) {
    const [audios, setAudios] = React.useState(audios1)

    React.useEffect( () => {
      setAudios(old => {
        if (old === audios1) {
          return audios2
        } else {
          return audios1
        }
    })
    }, [props.bank])

    React.useEffect( () => {
      document.addEventListener("keydown", detectKeyDown, true) 
      return () => {
        document.removeEventListener("keydown", detectKeyDown, true)
      }
    }, [props.bank])

    function detectKeyDown(e) {
      audios.forEach( audio => {
        if (e.key === audio.keystroke) {
          props.updateSound(audio)
        }
      })
    }

    // CREATE A DRUMPAD COMPONENT AND CREATE THE {DRUMPADS} WITH A MAP BUT PASS THE STUFF AS PROPS
    const drumPads = audios.map( audio => {
      return <DrumPad audio={audio} updateSound={props.updateSound}/>
    })

    return (
      <div id="drum" className="drum-grid">
        {drumPads}
      </div>
    )
  }