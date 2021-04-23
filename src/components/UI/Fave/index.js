import React from 'react'
import './style.css'

/**
* @author
* @function Fave
**/

const Fave = (props) => {
  return(
    <div className="fave mb-3">
        <img src="/images/cat.jpg" alt="fave" className="mx-auto d-block"/>

        <div className="faveLower">
            <p>fave adlkaslk lskd sfsd dd s dsjskdj ksdj</p>
            <a target="_blank" href="https://amazon.com">Shop this product</a>
        </div>
    </div>
   )

 }

export default Fave