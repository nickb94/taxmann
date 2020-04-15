import React from 'react'
import BookstoreImage from "../../../assets/Images/Bookstore.png"
import { UnderlineButton } from "../../../assets/UnderlineButton"

export const OfferCopy5 = () => {

    return (
        <div className="offerwrapper">
            <div className="image_wrapper">
                <img className="offercopy_image" src={BookstoreImage} alt="A-Bookstore" />

            </div>
            <div className="content_wrapper">
                <div className="list_heading">Super deal of a lifetime</div>
                <div className="list_subheading">Get 2 modules at a price of module.</div>
                <div className="underline_btn"><UnderlineButton label={"Know more"} /></div>
            </div>
        </div>
    )
}

