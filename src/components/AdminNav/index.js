import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
* @author
* @function AdminNav
**/

const AdminNav = (props) => {
  return(
    <div id="adminBar" className="text-center">
            
        <div>
            <img id="adminlogo" className="mt-5" src="/images/logo.jpeg" alt="logo"/>
        </div>
        
        <ul className="mt-5">
          <h5>
            <li><Link className="adminBarIcon" to="/Admin_/Home">Home</Link> </li><br/>
            <li><Link className="adminBarIcon" to="/Admin_/NewArticle">New Article</Link> </li><br/>
            <li><Link className="adminBarIcon" to="/Admin_/OurFaves">Our Faves</Link></li><br/>
            <li><Link className="adminBarIcon" to="/Admin_/Categories">Categories</Link></li><br/>
            <li><Link className="adminBarIcon" to="/Admin_/Stats">Statistics</Link></li>
          </h5>
        </ul>
    
    </div>
   )

 }

export default AdminNav