import React from 'react'
import { OfferCopy3 } from "./OfferCopy3/OfferCopy3"
import { OfferCopy4 } from "./OfferCopy4/OfferCopy4"
import { OfferCopy5 } from "./OfferCopy5/OfferCopy5"
import { OfferCopy6 } from "./OfferCopy6/OfferCopy6"

import "./OfferCopy.css"

export const OfferCopies = () => {
    return (
        <div>
            <div className="offercopy_heading">Offers</div>
            <div className="offercopy_list">
                <OfferCopy3 />
                <OfferCopy4 />
                <OfferCopy5 />
                <OfferCopy6 />

            </div>
        </div>
    )
}
