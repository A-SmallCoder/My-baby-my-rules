import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faListUl} from '@fortawesome/free-solid-svg-icons'
import Hero from '../../components/Hero'
import Left from '../../components/Left'
import {articleData} from './articleData'
import { data } from 'jquery'
import Fave from '../../components/UI/Fave'

/**
* @author Andrew-Lloyd Small
* @function ArticlePreview
**/

const ArticlePreview = (props) => {
  return(
    <div>
      {articleData.map((data, key) => {
        return (
          <div key={key}>

            <div id="titlediv" className="mt-5 d-flex justify-conetent-center">
              <h1 id="articeTitle">{data.title}</h1>
            </div><hr id="line"/>

            <Hero>
              <Left>
                <div id="publication" className="row">
                  <div className="col-sm-12 col-md-6">
                    <FontAwesomeIcon className="fa" icon={faCalendarAlt}/>
                    <span id="published" className="pl-2">Published: {data.published}</span>
                  </div>

                  <div id="mydiv1" className="col-sm-12 col-md-6">
                    <FontAwesomeIcon className="fa" icon={faListUl}/>
                    <span id="published" className="pl-2">Category: {data.category}</span>
                  </div>
                </div>
                <hr/>

                <div id="introContainer" className="mb-4">
                  <p id="intro">{data.intro}</p>
                </div>

                <div id="converDiv">
                  <img className="img" src="babyClothes.jpg" alt="Article cover photo"/>
                </div>

                <div className="mt-4 pContainer">
                  <p id="p1">{data.p1}</p>
                </div>

                <div className="mt-4 pContainer">
                  <p id="p2">{data.p1}</p>
                </div>

                <div className="mt-4 pContainer">
                  <p id="p3">{data.p1}</p>
                </div>

                <div id="converDiv">
                  <img className="img" src="babyClothes.jpg" alt="Article cover photo"/>
                </div>

                <div id="p1Container" className="mt-4">
                  <p id="p1">{data.p1}</p>
                </div>

                <h2>Our Faves:</h2><hr/>
                <div id="ourFaves" className="row d-flex justify-content-around pt-4 pb-4">
                  <Fave/>
                  <Fave/>
                  <Fave/>
                </div>

              </Left>
            </Hero>
          </div>
        );
      })}
    </div>
   )

 }

export default ArticlePreview