import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css';


/**
* @author Andrew-Lloyd Small
* @function Footer
**/

const Footer = (props) => {
  return(
    <div id="footerContainer">
        <div id="footerMain" className="row d-flex justify-content-between">
            <div>
                {<Link to="/">Contact us</Link>}<br/>
                {<Link to="/Categories">A-Z Categories</Link>}
            </div>
            <div>
                <p>Follow: <a target="_blank" href="https://www.instagram.com/mybaby_myrules/"><FontAwesomeIcon icon={["fab","instagram"]} /></a></p>
            </div>

        </div>
        <div id="footerLower" className="row d-flex justify-content-around">
            <a href="#">Privacy</a>
            <a href="#">Terms of use</a>
        </div>

    </div>
   )

 }

export default Footer