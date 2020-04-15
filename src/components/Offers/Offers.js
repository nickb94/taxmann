import React from "react"
import "./Offers.css"
import { CarouselLeft } from "../../assets/CarouselLeft"
import { CarouselRight } from "../../assets/CarouselRight"
import Rectangle from "../../assets/Images/Mountains.png"
import { PrimaryButton } from "../../assets/PrimaryButton"


export const Offers = () => {

    return (
        <div className="offers">
            <div className="carousel_wrapper">
                <div className="left">
                    <CarouselRight />
                </div>
                <div className="current">
                    <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                    <div className="offer_content">
                        <div className="content_heading">SUBSCRIPTION 2019</div>
                        <div className="content_subheading">Boost your Practice</div>
                        <div className="content_about">An all encompassing , authentic and update plateform</div>
                        <div className="knowmore"><PrimaryButton label="Know More" /></div>
                    </div>
                </div>
                <div className="right">
                    <CarouselLeft />
                </div>
            </div>
        </div>
    )
}