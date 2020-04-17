import React from "react"
import "./Offers.css"
import { CarouselLeft } from "../../assets/CarouselLeft"
import { CarouselRight } from "../../assets/CarouselRight"
import Rectangle from "../../assets/Images/Mountains.png"
import { PrimaryButton } from "../../assets/PrimaryButton"


document.addEventListener("DOMContentLoaded", () => {

    const SLIDETIME = 500;
    const backbutton = document.querySelector(".left");
    const forwardButton = document.querySelector(".right");
    const allSlides = [...document.querySelectorAll(".slide")];

    let clickable = true;
    let active = null;
    let newActive = null;

    const initSlider = () => {
        allSlides.forEach(slide => {

            slide.setAttribute(
                "style",
                `transition: transform ${SLIDETIME}ms ease;
                             animation-duration: ${SLIDETIME}ms`,
            );
        });
    }

    const changeSlide = forward => {
        if (clickable) {
            clickable = false;
            active = document.querySelector('.current');
            const activeSlideIndex = allSlides.indexOf(active);

            if (forward) {
                newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
                active.classList.add('slideOutLeft');
                newActive.classList.add('slideInRight', 'current');
            } else {

                newActive =
                    allSlides[
                    (activeSlideIndex - 1 + allSlides.length) % allSlides.length
                    ];
                active.classList.add('slideOutRight');
                newActive.classList.add('slideInLeft', 'current');
            }
        }
    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitionend', e => {

            if (slide === active && !clickable) {
                clickable = true;
                active.className = 'slide';
            }
        });
    });

    //EventListeners for buttons
    forwardButton.addEventListener("click", () => {
        changeSlide(true);
    })

    backbutton.addEventListener("click", () => {
        changeSlide(false);
    })

    initSlider();
})




export const Offers = () => {

    return (
        <div className="offers">
            <div className="carousel_wrapper">
                <div className="left">
                    <CarouselRight />
                </div>
                <div className="slides_wrapper">
                    <div className="slide">
                        <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                        <div className="offer_content">
                            <div className="content_heading">SUBSCRIPTION 2019</div>
                            <div className="content_subheading">Boost your Practice</div>
                            <div className="content_about">An all encompassing , authentic and update plateform</div>
                            <div className="knowmore"><PrimaryButton label="Know More" /></div>
                        </div>
                    </div>

                    <div className="slide">
                        <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                        <div className="offer_content">
                            <div className="content_heading">SUBSCRIPTION 2019</div>
                            <div className="content_subheading">Boost your Practice</div>
                            <div className="content_about">An all encompassing , authentic and update plateform</div>
                            <div className="knowmore"><PrimaryButton label="Know More" /></div>
                        </div>
                    </div>

                    <div className="slide current">
                        <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                        <div className="offer_content">
                            <div className="content_heading">SUBSCRIPTION 2019</div>
                            <div className="content_subheading">Boost your Practice</div>
                            <div className="content_about">An all encompassing , authentic and update plateform</div>
                            <div className="knowmore"><PrimaryButton label="Know More" /></div>
                        </div>
                    </div>

                    <div className="slide">
                        <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                        <div className="offer_content">
                            <div className="content_heading">SUBSCRIPTION 2019</div>
                            <div className="content_subheading">Boost your Practice</div>
                            <div className="content_about">An all encompassing , authentic and update plateform</div>
                            <div className="knowmore"><PrimaryButton label="Know More" /></div>
                        </div>
                    </div>

                    <div className="slide">
                        <img className="rectangle_image" src={Rectangle} alt="Mountains" />
                        <div className="offer_content">
                            <div className="content_heading">SUBSCRIPTION 2019</div>
                            <div className="content_subheading">Boost your Practice</div>
                            <div className="content_about">An all encompassing , authentic and update plateform</div>
                            <div className="knowmore"><PrimaryButton label="Know More" /></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <CarouselLeft />
                </div>
            </div>
        </div>
    )
}