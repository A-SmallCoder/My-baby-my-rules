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
  return(
    <div className="adminHome">
        <form>
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