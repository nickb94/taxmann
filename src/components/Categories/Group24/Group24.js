import React from 'react'
import { Group5 } from "./Group5/Group5"
import { Group3 } from "./Group3/Group3"
import { Group } from "./Group/Group"

import "./Group24.css"
const Group24 = () => {
    return (
        <div className="product_wrapper">
            <Group5 />
            <Group3 />
            <Group />
            <Group />
            <Group5 />
            <Group3 />
        </div>
    )
}

export default Group24;
