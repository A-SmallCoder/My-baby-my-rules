import React from 'react';
import './style.css';
import $ from 'jquery';

/**
* @author
* @function Card
**/

const Card = (props) => {
  return(
    <div className="card d-flex mb-5">
      <div className="cardLower">
        <h5>Title title</h5>
        <p className="subtitle">In publishing and graphic design, Lorem ipsum is a placeholder text commonly</p>
      </div>

      <div className="imgdiv">
        <img className="img" alt="article cover" src="babyClothes.jpg"/>
      </div>
    </div>
    
   )

 }
 
 //make text same width as pic
 window.onload = function (){
   var width = $(".img").css("width");
   $(".cardLower").css("width",width);
 }

export default Card