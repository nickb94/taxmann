import React from 'react'
import CentralImage from "../../../../assets/Images/CentralImage.png"
import { StarRatings } from "../../../../assets/StarRatings"
import { TertiaryButton } from "../../../../assets/TertiaryButton"
import { SecondaryButton } from "../../../../assets/SecondaryButton"

import "./Group3.css"

export const Group3 = () => {
    return (
        <div className="group3_wrapper">
            <div className="product_card">

                <img className="product_image" src={CentralImage} alt="Book-Cover" />
            </div>
            <div className="product_title">Central Excise Manual (Vol 2)(Set of 3 Books)</div>
            <div className="product_authors">Amitabha Mukherjee</div>
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
