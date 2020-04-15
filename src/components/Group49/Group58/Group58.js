import React from 'react'
import { Collapse } from "../../../assets/Collapse"
import { Toggle } from "../../Toggle/Toggle"
import "./Group58.css"

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
            <div className="icon_books">
                <span className="collapse_icon"><Collapse /></span>
                <span className="leftmenu_heading_open"><a href="/#">Professional Books</a></span>
            </div>
            <div className="divider_two"></div>
            <ul className="ul_group58">
                <li><a href="/#">Direct Tax Laws</a></li>
                <li><a href="/#">International Taxation</a></li>
                <li><a href="/#">Indirect Tax Laws</a></li>
                <li><a href="/#">Insolvency and Bankruptcy Code</a></li>
                <li><a href="/#">GST</a></li>
                <li><a href="/#">Accounts and Audit</a></li>
                <li><a href="/#">Banking & Insurance</a></li>
                <li><a href="/#">Bare Acts</a></li>
            </ul>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">NISM/IIBF</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">Journals</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">Tax Compliance on DVD</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">Taxmann online on DVD</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">Taxmann online on Web</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">E-services</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">E-Journals</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">E-Books</a></span>
            </div>
            <div className="divider_two"></div>
            <div className="icon_books">
                <span className="leftmenu_heading"><a href="/#">Advanced diploma in international taxation</a></span>
            </div>
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
            <div className="quicklinks_heading_expand">
                <span className="leftmenu_heading"><a href="/#">Catalogue</a></span>
            </div>
            <div className="quicklinks_heading">
                <a href="/#">Dealers</a>
            </div>


        </div>
    )
}
