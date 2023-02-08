import React from "react"

function DrumPad(props) {
    const {audio, updateSound} = props

    return (
          <div key={audio.id} onClick={() => updateSound(audio)} className="drum-pad">
            {audio.keystroke}
          </div>
    )
}

export default DrumPad

