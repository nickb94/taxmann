import React from "react"
import { Research } from "../../../assets/Research.js"
import { Notification } from "../../../assets/Notification.js"
import { Profile } from "../../../assets/Profile.js"
import { Cart } from "../../../assets/Cart.js"

import "./Group34.css"
export const Group34 = () => {

    return (
        <div className="group34_wrapper">
            <div><Research />
            </div>
            <div><Notification />
            </div>
            <div><Profile />
            </div>
            <div><Cart />
            </div>
        </div>
    )
}