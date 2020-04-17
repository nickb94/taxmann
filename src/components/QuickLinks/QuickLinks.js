import React from 'react';
import {Collapse} from "../../assets/Collapse";

import "./QuickLinks.css"

export const QuickLinks = ({ label }) => {

    const [state, setState] = React.useState(false);

    return (
        <>
        {
                state ?
                    <>
                        <div className="open_icon_books_ql">
                            <span onClick={() => setState(!state)} className="collapse_icon"><Collapse /></span>
                            <div onClick={() => setState(!state)}>
                                <span className="leftmenu_heading_open">{label}</span>
                            </div>
                        </div>
                        
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
                    </>

                    :

                    <div onClick={() => setState(!state)} className="quicklinks_heading_more">
                        <span className="leftmenu_heading">{label}</span>
                    </div>

            }
    
     </>
    )
}
