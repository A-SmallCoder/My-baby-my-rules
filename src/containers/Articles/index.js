import React from 'react'
import Hero from '../../components/Hero'
import Left from '../../components/Left'
import Logo from '../../components/Logo'
import Card from '../../components/UI/Card/Index'
import './style.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'

/**
* @author Andrew-Lloyd Small
* @function Articles
**/

const Articles = (props) => {
  return(
    <div>
      <div id="categoriesTop">
          <h2 className="pageTitle">Articles</h2>
      </div>

      <Hero>
        <Left>
          <div className="d-flex justify-content-center">
            <div className="row justify-content-around">
              
              <Link to='./Article'>
                <div>
                  <Card/>
                  <div className="info d-flex justify-content-between">
                    <span>Category</span>
                    <span>11/21/2020</span>
                  </div>
                </div>
              </Link>
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