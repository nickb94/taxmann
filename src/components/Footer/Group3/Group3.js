import React from "react"
import FooterTaxmann from "../../../assets/Logo/footer_logo.png"
import { PlayStore } from "../../../assets/Applinks/PlayStore"
import { AppStore } from "../../../assets/Applinks/AppStore"
import { Group29 } from "./Group29/Group29"

import "./Group3.css"
export const Group3 = () => {

    return (
        <div>
            <div className="logo-wrapper">
                <a href="/#"><img src={FooterTaxmann} alt="Taxmann-Logo" /></a>
            </div>
            <section className="footer_text">
                <p className="about_para">Everything you need on Income Tax, GST and Corporate Laws. Authentic databases, books, journals, Practice and Exam platforms</p>
            </section>
            <div className="applinks">
                <a href="/#"><PlayStore /></a>
                <a href="/#"><AppStore /></a>
            </div>
            <div>
                <Group29 />
            </div>
            <div className="copyright">
                © 2019 Taxmann.com. All rights reserved.
            </div>
        </div>
    )
}