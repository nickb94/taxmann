import React from 'react'
import { OfferCopy3 } from "./OfferCopy3/OfferCopy3"
import { OfferCopy4 } from "./OfferCopy4/OfferCopy4"
import { OfferCopy5 } from "./OfferCopy5/OfferCopy5"
import { OfferCopy6 } from "./OfferCopy6/OfferCopy6"

import "./OfferCopy.css"



// document.addEventListener("DOMContentLoaded",()=>{

//     const SLIDETIME = 500;
//     const backbutton = document.querySelector(".left");
//     const forwardButton = document.querySelector(".right");
//     const allSlides = [...document.querySelectorAll(".slide")];

//     let clickable =true;
//     let active = null;
//     let newActive = null;

//     const initSlider = () =>{
//         allSlides.forEach(slide=>{

//             slide.setAttribute(
//                 "style",
//                 `transition: transform ${SLIDETIME}ms ease;
//                               animation-duration: ${SLIDETIME}ms  
//                 `,
//             );
//         });
//     }


//     const changeSlide = forward => {
//         if (clickable) {
//           clickable = false;
//           active = document.querySelector('.current');
//           const activeSlideIndex = allSlides.indexOf(active);
    
//           if (forward) {    
//             newActive = allSlides[(activeSlideIndex + 1) % allSlides.length];
//             active.classList.add('slideOutLeft');
//             newActive.classList.add('slideInRight', 'current');
//           } else {
    
//             newActive =
//               allSlides[
//                 (activeSlideIndex - 1 + allSlides.length) % allSlides.length
//               ];
//             active.classList.add('slideOutRight');
//             newActive.classList.add('slideInLeft', 'current');
//           }
//         }
//       }
      
//       allSlides.forEach(slide => {
//         slide.addEventListener('transitionend', e => {
          
//           if (slide === active && !clickable) {
//             clickable = true;
//             active.className = 'slide';
//           }
//         });
//       });

//     //EventListeners for buttons
//     forwardButton.addEventListener("click",()=>{
//         changeSlide(true);
//     })

//     backbutton.addEventListener("click",()=>{
//         changeSlide(false);
//     })

//     initSlider();
// })



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
