import React from 'react';
import Left from '../Left';
import Right from '../Right';
import './style.css';

/**
* @author Andrew-Lloyd Small
* @function Hero
**/

const Hero = (props) => {
  return(
    <div id="holder" className="row d-flex justify-content-center">

      <div id="leftSide">
        <Left>
          {props.children}
        </Left>
      </div>

      <div id="rightSide">
        <Right>
          {props.children}
        </Right>
      </div>
      
    </div>
   )

 }

export default Hero;