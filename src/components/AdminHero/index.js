import React from 'react';
import { Route, Switch } from 'react-router';
import AdminHome from '../../containers/AdminHome';
import ArticlePreview from '../../containers/ArtilcePreview';
import NewArticle from '../../containers/NewArticle';
import NotFound from '../../containers/NotFound';
import AdminLogin from '../AdminLogin';
import './style.css';

/**
* @author Andrew-Lloyd Small
* @function AdminHero
**/

const AdminHero = () => {
  return(
    <div id="adminHero">
      <Switch>
        <Route exact path="/Admin_" component={AdminLogin}/>
        <Route path="/Admin_/Home" component={AdminHome}/>
        <Route path="/Admin_/NewArticle" component={NewArticle}/>
        <Route path="/Admin_/ArticlePreview" component={ArticlePreview}/>
        <Route component={NotFound} /> 
      </Switch>
    </div>
   )

 }

export default AdminHero