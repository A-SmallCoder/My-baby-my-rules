import React from 'react'
import './style.css'
import Hero from '../../components/Hero'
import Left from '../../components/Left'

/**
* @author Andrew-Lloyd Small
* @function Article
**/

const Article = (props) => {
  return(
    <div>
      <div id="titlediv" className="mt-5 d-flex justify-conetent-center">
        <h1 id="articeTitle">What to expect when expecting</h1>
      </div>

      <Hero>
        <Left>
          
        </Left>
      </Hero>
    </div>
   )

 }

export default Article