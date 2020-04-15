import React from 'react'
import CorriDoorImage from "../../../assets/Images/Corridoor.png"
import { UnderlineButton } from "../../../assets/UnderlineButton"

export const OfferCopy6 = () => {

    return (
        <div className="offerwrapper">
            <div className="image_wrapper">
                <img className="offercopy_image" src={CorriDoorImage} alt="A-Corridoor" />

            </div>
            <div className="content_wrapper">
                <div className="list_heading">Books under Rs 599 only</div>
                <div className="list_subheading">5000+ books on Income Tax and Corporate Tax.</div>
                <div className="underline_btn"><UnderlineButton label={"Know more"} /></div>
            </div>
        </div>
    )
}

