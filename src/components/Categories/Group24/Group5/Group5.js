import React from 'react'
import IncomeTaxImage from "../../../../assets/Images/IncomeTaxImage.png"
import { StarRatings } from "../../../../assets/StarRatings"
import { TertiaryButton } from "../../../../assets/TertiaryButton"
import { SecondaryButton } from "../../../../assets/SecondaryButton"
import { BestSeller } from "../../../../assets/BestSeller"


import "./Group5.css"

export const Group5 = () => {
    return (
        <div className="group5_wrapper">
            <div className="product_card">
                <BestSeller />
                <img className="product_image" src={IncomeTaxImage} alt="Book-Cover" />
            </div>
            <div className="product_title">Income Tax Rules with Master Guide To Income Tax Rules</div>
            <div className="product_authors">Aditya Gadge,  Biharilal Deora</div>
            <div className="price_rating">
                <div className="product_price">Rs. 345</div>
                <div className="product_rating"><StarRatings /></div>
            </div>
            <div className="action_links">
                <TertiaryButton label={"ADD TO CART"} />
                <SecondaryButton label={"BUY NOW"} />
            </div>
        </div>
    )
}
