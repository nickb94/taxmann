import React from "react";
import { DropdownArrow } from "../../../assets/DropdownArrow.js"

import "./Group32.css"

export const Group32 = () => {

    return (
        <div className="group32_wrapper">
            <div className="dots userR">R</div>
            <hr />
            <div className="dots userE">E</div>
            <hr />
            <div className="dots userC">C</div>
            <hr />
            <div className="userDropdown"><DropdownArrow /></div>
        </div>
    )
}