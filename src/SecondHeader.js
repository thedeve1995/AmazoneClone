import React, { useState } from 'react';
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
    
      const accordion = () => {
        let tambahan = document.getElementById("tambahan");

        if (tambahan.style.display === "none"){
            tambahan.style.display = "block"
            document.getElementById("all").style.display = "none"
            document.getElementById("all1").style.display = "flex"
        } else {
            tambahan.style.display = "none"
            document.getElementById("all").style.display = "flex"
            document.getElementById("all1").style.display = "none"
        }
        

        

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
                
                <div className="sideNavButton">
                    <h2>Digital Content & Devices</h2>
                    <div className="SN-button">
                        <p>Amazon Music</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button">
                        <p>Kindle E-readers & Books</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button">
                        <p>Amazon AppStore</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <hr></hr>   
                </div>
                
                <div className="sideNavButton">
                    <h2>Shop By Department</h2>
                    <div className="SN-button">
                        <p>Electronics</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button">
                        <p>Computers</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button">
                        <p>Smart Home</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button">
                        <p>Arts & Crafts</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>

                    <div id='tambahan'>
                    <div className="SN-button1">
                        <p>Automotive</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>

                    <div className="SN-button1">
                        <p>Baby</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>

                    <div className="SN-button1">
                        <p>Beauty and Personal Care</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>

                    <div className="SN-button1">
                        <p>Women's Fashion</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Men's Fashion</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Girls' Fashion</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Boys' Fashion</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Health and Household</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Home and Kitchen</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Industrial amd Scientific</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Luggage</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Movies & Television</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Pet Supplies</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Software</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Sports and Outdoors</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Tools & Home Improvement</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Toys and Games</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="SN-button1">
                        <p>Video Games</p>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                    </div>
                    <div onClick={accordion} className="SN-button all" id='all'>
                        <p className="accordion">See All</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div onClick={accordion} className="SN-button all1" id='all1'>
                        <p className="accordion">See Less</p>
                        <i class="fa-solid fa-chevron-up"></i>
                    </div>
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