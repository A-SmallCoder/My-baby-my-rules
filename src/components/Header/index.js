import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';

/**
* @author Andrew-Lloyd Small
* @function Header
**/

const Header = (props) => {
  return(
    <div>
        <header id="header" className="smart-scroll">
            <div>
                <nav className="navbar navbar-expand-lg d-flex justify-content-between">
                    <div>
                        <Link to="/"> 
                            <h3 id="title">
                                <div className="row, d-flex, justify-content-center">
                                    <img src="/images/logo.jpeg" alt="logo" id="logoimg"/>
                                </div>                                
                            </h3> 
                        </Link>
                    </div>
                    
                    <div id="openbtn" onClick={toggleMenu} className="mb-3"><img alt="menu icon" src="images/menu.png"/></div>                    
                </nav>
            </div>
            
        </header>
    </div>
   )

 }

// detect scroll up or down
window.onload = function(){
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            var scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                console.log("scrolled up");
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                console.log("scrolled down");
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
}

function toggleMenu() {
    if($("#bar").css("width") === "0px"){
        $("#bar").css("width","400px");
    }else{
        $("#bar").css("width","0px");
    }
}




export default Header;