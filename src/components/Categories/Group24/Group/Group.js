import React from 'react'
import GSTImage from "../../../../assets/Images/GSTImage.png"
import { StarRatings } from "../../../../assets/StarRatings"
import { TertiaryButton } from "../../../../assets/TertiaryButton"
import { SecondaryButton } from "../../../../assets/SecondaryButton"
import { LimitedEdition } from "../../../../assets/LimitedEdition"

import "./Group.css"

export const Group = () => {
    return (
        <div className="group_wrapper">
            <div className="product_card">
                <LimitedEdition />
                <img className="product_image" src={GSTImage} alt="Book-Cover" />
            </div>
            <div className="product_title">Central Excise Manual (Vol 2)(Set of 3 Books)</div>
            <div className="product_authors">By S. N. Bidani, P. K. Mitra</div>
            <div className="price_rating">
                <div className="product_price">Rs. 1,799</div>
                <div className="product_rating"><StarRatings /></div>
            </div>
            <div className="action_links">
                <TertiaryButton label={"ADD TO CART"} />
                <SecondaryButton label={"BUY NOW"} />
            </div>
        </div>
    )
}
