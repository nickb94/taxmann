import React from "react"
import { QuickDelivery } from "../../assets/Usp/QuickDelivery"
import { SecuredPayment } from "../../assets/Usp/SecuredPayment"
import { FreeShipping } from "../../assets/Usp/FreeShipping"

import "./Group3Copy2.css"

export const Group3Copy2 = () => {

    return (
        <div className="group3copy2">
            <div className="usp_content">
                <div className="flex_usp">
                    <span className="usp_icon"><QuickDelivery /></span>
                    <div><div>Quick Delivery</div>
                        <p>FedEx courier in most of the Cities</p>
                    </div>
                </div>
                <div className="flex_usp">
                    <span className="usp_icon"><FreeShipping /></span>
                    <div><div>Free Shipping</div>
                        <p>Across India on order above Rs. 350</p>
                    </div>
                </div>
                <div className="flex_usp bottom">
                    <span className="usp_icon"><SecuredPayment /></span>
                    <div><div>Secured Payment</div>
                        <p>Tazmann provides secure service</p>
                    </div>
                </div>

            </div>
        </div>
    )
}