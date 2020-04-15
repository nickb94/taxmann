import React from "react";
import { Taxmann } from "../../assets/Logo/taxmann.js"
import { SearchBar } from "./SearchBar/SearchBar.js"
import { Group32 } from "./Group32/Group32"
import { Group34 } from "./Group34/Group34.js";
import "./Header.css"
import { Group18 } from "./Group18/Group18.js";

export const Header = () => {

    return (
        <>
            <div className="header_wrapper">
                <div className="logo_wrapper">
                    <div className="logo_taxmann">
                        <a href="/#"><Taxmann /></a>
                        <div className="logopart">Bookstore</div>
                    </div>
                </div>
                <div className="search_container">
                    <div><SearchBar /></div>
                </div>
                <div className="group32_container">
                    <Group32 />
                </div>
                <div className="group34_container">
                    <Group34 />
                </div>
                <div className="group18">
                    <Group18 />
                </div>
            </div>
        </>
    )
}

