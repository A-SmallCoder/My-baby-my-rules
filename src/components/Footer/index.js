import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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
                <a href="#">contact us</a><br/>
                <a href="#">A-Z Categories</a>
            </div>
            <div>
                <p>Follow: <a href="https://www.instagram.com/mybaby_myrules/"><FontAwesomeIcon icon={["fab","instagram"]} /></a></p>
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