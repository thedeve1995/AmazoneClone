import React from "react";
import './CSS/Header.css';
import SecondHeader from "./SecondHeader";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className="parent">
            <div className="header">
                <Link to="/">
                    <img 
                        className="header_logo"
                        src="IMG/amz-logo.png" 
                    />
                </Link>
                <div
                className="header_search">
                    <input 
                    className="header_searchInput" type="text"/>
                    <i class="fa-solid fa-magnifying-glass"></i>

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
                    <Link to="/checkout">
                        <div className="header_optionBasket" >
                            <i class="fa-solid fa-basket-shopping"></i>
                            <span className="header_option2">{basket?.length}</span>
                        </div>
                    </Link>
                    
                </div>
            </div>
            
            <SecondHeader />

        </div>
        
    )
}

export default Header;