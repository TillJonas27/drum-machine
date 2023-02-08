import React from "react"

export default function ToggleButton(props) {
    return (
        <div className="toggleButtonContainer">
            <label for={props.label}>
                <b>{props.label}</b>
            </label>
            <label className="togglerContainer">
                <input name={props.label} className="togglerCheckbox" type="checkbox" defaultChecked={props.checkedValue} checked={props.checkedValue} onClick={props.clickHandler}/>
                <span className="togglerSpan" />
            </label>
        </div>
    )
}