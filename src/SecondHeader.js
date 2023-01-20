import React from "react";
import './CSS/SecondHeader.css';
import './CSS/SideNav.css'


function SecondHeader() {
    const menu = () => {
        let side= document.getElementById("sidenav");
        let button= document.getElementById("button");

        side.style.left = 0;
        button.style.display = "block";
      }
    const close = () => {
        let side= document.getElementById("sidenav");
        let button= document.getElementById("button");

        side.style.left = "-400px";
        button.style.display = "none";
      }
    return (
        
        <div className="header1">
            <div className="side_nav" id="sidenav">
                <div className="close" onClick={close} id="button">
                    <i class="fa-solid fa-x"></i>
                </div>
                <div className="sideNavHead">
                    <i class="fa-solid fa-user"></i>
                    <h2>Hello, sign in</h2>
                </div>
           
                
            </div>
            <div className="header_nav1">
                <div className="menu" onClick={menu} >
                    <span className="header_option2">
                    <i class="fa-solid fa-bars"></i>
                    </span>
                    <span className="header_option2">ALL</span>
                </div>

                <div className="header_option" >
                   <span className="header_option2">Today's Deal</span>
                </div>

                <div className="header_option" >
                    <span className="header_option2">Customer Service</span>
                </div>
                <div className="header_option" >
                    <span className="header_option2">Registry</span>
                </div>
                
                <div className="header_option" >
                    <span className="header_option2">Gift Card</span>
                </div>
                
                <div className="header_option" >
                    <span className="header_option2">Sell</span>
                </div>

            </div>

        </div>
    )
}

export default SecondHeader;