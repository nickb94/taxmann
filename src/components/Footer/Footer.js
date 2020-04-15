import React from "react"
import { Group3 } from "./Group3/Group3"
import { Group14 } from "./Group14/Group14"
import { Group15Copy3 } from "./Group15Copy3/Group15Copy3"
import { Group } from "./Group/Group"
import { Group16Copy3 } from "./Group16Copy3/Group16Copy3"
import { Group15Copy } from "./Group15Copy/Group15Copy"
import { Group16Copy } from "./Group16Copy/Group16Copy"
import { Group17 } from "./Group17/Group17"

import "./Footer.css"
export const Footer = () => {

    return (
        <div className="Rectangle">
            <div className="column_one">
                <div className="group3">
                    <Group3 />
                </div>
            </div>
            <div className="column_two">
                <div className="group14">
                    <Group14 />
                </div>
                <div className="group15copy3">
                    <Group15Copy3 />
                </div>
            </div>
            <div className="column_three">
                <Group />

            </div>
            <div className="column_four">
                <div className="group15copy">
                    <Group15Copy />
                </div>
                <div className="group16copy3">
                    <Group16Copy3 />
                </div>
            </div>
            <div className="column_five">
                <div className="group16copy">
                    <Group16Copy />
                </div>
                <div className="group17">
                    <Group17 />
                </div>
            </div>
        </div>
    )
}
