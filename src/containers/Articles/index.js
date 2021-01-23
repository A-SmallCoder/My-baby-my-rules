import React from 'react'
import Hero from '../../components/Hero'
import Left from '../../components/Left'
import Logo from '../../components/Logo'
import Card from '../../components/UI/Card/Index'
import './style.css'
import $ from 'jquery';

/**
* @author Andrew-Lloyd Small
* @function Articles
**/

const Articles = (props) => {
  return(
    <div>
      <div id="categoriesTop" className='d-flex justify-content-center'>
          <h2>Articles</h2>
      </div>

      <Hero>
        <Left>
          <div className="d-flex justify-content-center">
            <div className="row justify-content-around">
              
            <div>
                <Card/>
                <div className="info d-flex justify-content-between">
                  <span>Category</span>
                  <span>11/21/2020</span>
                </div>
              </div>
              <div>
                <Card/>
                <div className="info d-flex justify-content-between">
                  <span>Category</span>
                  <span>11/21/2020</span>
                </div>
              </div>
              <div>
                <Card/>
                <div className="info d-flex justify-content-between">
                  <span>Category</span>
                  <span>11/21/2020</span>
                </div>
              </div>
              <div>
                <Card/>
                <div className="info d-flex justify-content-between">
                  <span>Category</span>
                  <span>11/21/2020</span>
                </div>
              </div>

            </div>
          </div>
        </Left>
      </Hero>
    </div>
   )

 }

 window.onload = function (){
  var width = $(".img").css("width");
  $(".info").css("width",width);
}

export default Articles