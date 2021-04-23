import React from 'react';
import './style.css';

/**
* @author
* @function NotFound
**/

const NotFound = (props) => {
  return(
    <div id="notFound">
        <style>{"\
        #header{display: none;}\
        #footerContainer{display: none;}\
        body{background-color: #152D46;}\
        img{height:300px;width:300px}\
        h1{color:white;}\
      "}</style>
        
        <div id="inside" className="d-flex justify-content-center">
            <h1>404: That page does not exist...</h1>
            <img className="mt-5 mx-auto d-block" src="/images/logo.jpeg" alt="logo"/>
        </div>
    </div>
   )

 }

export default NotFound