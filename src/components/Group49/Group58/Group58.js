import React from 'react'

import { Toggle } from "../../Toggle/Toggle"
import {IconBooks} from "../../IconBooks/IconBooks"
// import {QuickLinks} from "../../QuickLinks/QuickLinks"
import "./Group58.css"
import { QuickLinks } from '../../QuickLinks/QuickLinks'

export const Group58 = () => {
    return (
        <div className="sidebar_wrapper">
            <div className="toggle">
                <Toggle />
            </div>
            <div className="bookstore_home">
                <a href="/#">Bookstore Home</a>
            </div>
            <div className="divider_one"></div>

            <IconBooks label="Professional Books" />

            <div className="divider_two"></div>
            
            <IconBooks label="NISM/IIBF" />

            <div className="divider_two"></div>
            
            <IconBooks label="Journals" />
            
            <div className="divider_two"></div>

            <IconBooks label="Tax Compliance on DVD" />

            <div className="divider_two"></div>

            <IconBooks label="Taxmann online on DVD" />

            <div className="divider_two"></div>

            <IconBooks label="Taxman online on web" />

            <div className="divider_two"></div>

            <IconBooks label="E-services" />

            <div className="divider_two"></div>
            
            <IconBooks label="E-Journals" />

            <div className="divider_two"></div>

            <IconBooks label="E-Books" />

            <div className="divider_two"></div>

            <IconBooks label="Advanced diploma in international taxation" />

            <div className="divider_two"></div>
            
            <div className="quicklinks">
                Quick Links
            </div>
            <div className="quicklinks_heading">
                <a href="/#">Bookmann India</a>
            </div>
            <div className="quicklinks_heading">
                <a href="/#">Authors</a>
            </div>

            <QuickLinks label={"Catalogue"}/>

            <div className="quicklinks_heading">
                <a href="/#">Dealers</a>
            </div>

        </div>
    )
}
