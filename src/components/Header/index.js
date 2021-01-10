import React from 'react';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

/**
* @author Andrew-Lloyd Small
* @function Header
**/

const Header = (props) => {
  return(
    <div>
        <header id="header" className="smart-scroll">
            <div>
                <nav className="navbar navbar-expand-lg row d-flex justify-content-between">
                    <div>
                        <a href="#"> 
                            <h3 id="title">
                                <div className="row, d-flex, justify-content-center">
                                    <p id="top">My baby</p><br/>
                                    <p id="bottom"> <img id="logo" src="logo.png"/> my rules</p>
                                </div>                                
                            </h3> 
                        </a>
                    </div>
                    
                    <div id="openbtn" onClick={toggleMenu} className="mb-3"><img src="menu.png"/></div>                    
                </nav>
            </div>
            
        </header>
    </div>
   )

 }

// detect scroll top or down
window.onload = function(){
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            var scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
}

function toggleMenu() {
    if($("#bar").css("width") == "0px"){
        $("#bar").css("width","400px");
    }else{
        $("#bar").css("width","0px");
    }
}




export default Header;