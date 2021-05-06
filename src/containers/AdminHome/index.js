import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import ArticleTile from '../../components/UI/ArticleTile';
import "./style.css";

/**
* @author
* @function AdminHome
**/

const AdminHome = (props) => {

  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12){
    timeOfDay = 'morning'
  }else if (hours >= 12 && hours < 17){
    timeOfDay = 'afternoon'
  }else if (hours >= 17 && hours < 19){
    timeOfDay ='evening'
  }else{
    timeOfDay = 'night'
  }

  return(
    <div className="adminHome">
      <div className="greetingDiv">
        <h1>Good {timeOfDay}, P</h1>
        <hr/>
      </div><br/>

      <form className="ml-3">
        <div className="search row gy-2 " >
          <input type="text" className="form-control col-md-10 col-sm-10 mr-4" placeholder="search articles and categories"/>
          <button type="submit" className="sub"><FontAwesomeIcon icon={faSearch}/> </button>
          </div>
      </form>
      <hr/>

      <div className="feed">
        <ArticleTile/>
        <ArticleTile/>
        <ArticleTile/>
        <ArticleTile/>
        <ArticleTile/>
        <ArticleTile/>
        <ArticleTile/>
      </div>
    </div>
   )

 }

export default AdminHome