import React from "react";
import './CSS/Header.css'


function Header() {
    return (
        <div className="header">

            <img 
                className="header_logo"
                src="IMG/amz-logo.png" 
            />

            <div
            className="header_search">
                <input
                className="header_searchInput" type="text"/>
                {/* logo */}

            </div>

            <div className="header_nav">
                <div className="header_option" >
                    <span className="header_option1">Hello Guest !</span>
                    <span className="header_option2">Sign In</span>
                </div>

                <div className="header_option" >
                    <span className="header_option1">Returns</span>
                    <span className="header_option2">& Orders</span>
                </div>

                <div className="header_option" >
                    <span className="header_option1">Your</span>
                    <span className="header_option2">Prime</span>
                </div>
            </div>

        </div>
    )
}

export default Header;