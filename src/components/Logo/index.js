import React from 'react'
import './style.css'

/**
* @author
* @function Logo
**/

const Logo = (props) => {
  return(
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
   )
 }

export default Logo