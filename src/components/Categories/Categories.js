import React from 'react'
import { DropdownArrow } from "../../assets/DropdownArrow"
import { UnderlineButton } from "../../assets/UnderlineButton"
import Group24 from "./Group24/Group24"
import Group24Copy from "./Group24Copy/Group24Copy"
import "./Categories.css"

export const Categories = () => {
    return (
        <div className="categories_wrapper">
            <div className="group6">
                <div className="flex_bar">
                    <div className="category_group">
                        <div className="category_label">Recommended for you</div>
                        <div className="recommended_arrow"><DropdownArrow /></div>
                    </div>
                    <div><UnderlineButton label={"View all"} /></div>
                </div>
            </div>
            <Group24 />
            <div className="ruler"></div>
            <div className="group6">
                <div className="flex_bar">
                    <div className="category_group">
                        <div className="category_label">New Releases</div>
                    </div>
                    <div><UnderlineButton label={"View all"} /></div>
                </div>
            </div>
            <Group24 />
            <div className="ruler"></div>
            <div className="group6">
                <div className="flex_bar">
                    <div className="category_group">
                        <div className="category_label">Featured</div>
                    </div>
                    <div><UnderlineButton label={"View all"} /></div>
                </div>
            </div>
            <Group24Copy />
            <div className="ruler"></div>
            <div className="group6">
                <div className="flex_bar">
                    <div className="category_group">
                        <div className="category_label">Latest</div>
                    </div>
                    <div><UnderlineButton label={"View all"} /></div>
                </div>
            </div>
            <Group24Copy />
        </div>
    )
}
