import React from 'react'
import { ToggleArrow } from "../../assets/ToggleArrow"
import "./Toggle.css"

export const Toggle = () => {
    return (
        <div className="toggle_button">
            <div className="switch_label">Hide</div>
            <div className="toggle_switch">
                <ToggleArrow /></div>
        </div>
    )
}
