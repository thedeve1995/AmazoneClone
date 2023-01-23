import React from "react";
import './CSS/Header.css';
import SecondHeader from "./SecondHeader";
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

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
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthenticaton}className="header_option" >
                            <span className="header_option1">{!user ? 'Guest' : user.email}</span>
                            <span className="header_option2">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>

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